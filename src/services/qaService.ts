/* eslint-disable sort-keys */
import type { TaskConfig } from '../api/base-config.js'
import { VikaSheet } from '../db/vika.js'
import type { SkillInfoArray } from './wxopenaiService.js'
import { logger } from '../utils/mod.js'
import { VikaDB } from '../db/vika-db.js'

// import { db } from '../db/tables.js'
// const noticeData = db.notice
// logger.info(JSON.stringify(noticeData))

// 服务类
export class QaChat {

  private db: VikaSheet
  envsOnVika: any
  roomWhiteList: any
  contactWhiteList: any
  reminderList: TaskConfig[] = []
  records: any

  constructor () {
    this.db = new VikaSheet(VikaDB.vika, VikaDB.dataBaseIds.qaSheet)
    // void this.init()
  }

  // 初始化
  async init () {
    const records = await this.getRecords()
    this.records = records
  }

  async getRecords () {
    const records = await this.db.findAll()
    logger.info('维格表中的记录：', JSON.stringify(records))
    return records
  }

  // 获取定时提醒
  async getQa (): Promise<SkillInfoArray> {
    await this.init()
    if (!this.records) {
      // Handle error
      return []
    }

    const skills: SkillInfoArray = this.records
      .filter((record: {recordId:string; fields:{[x: string]: any }}) => record.fields['启用状态|state'] === '启用' && record.fields['标准问题|title'] && record.fields['机器人回答|answer'])
      .map((record: {recordId:string; fields:{[x: string]: any }}) => {
        const question: string[] = []
        for (let i = 1; i <= 3; i++) {
          const similarQuestion = record.fields[`相似问题${i}(选填)|question${i}`]
          if (similarQuestion) {
            question.push(similarQuestion)
          }
        }

        return {
          skillname: record.fields['分类|skillname'] || '通用问题',
          title: record.fields['标准问题|title'],
          question,
          answer: [ record.fields['机器人回答|answer'] ],
        }
      })
    logger.info('skills:', JSON.stringify(skills))
    return skills
  }

}
