import { ClassificationItem } from "@/classes/ClassificationItem"

export class Classification {
    genre: ClassificationItem
    subGenre: ClassificationItem
    segment: ClassificationItem
  
    constructor(genre: string, subGenre: string, segment: string) {
      this.genre = genre
      this.subGenre = subGenre
      this.segment = segment
    }
  }