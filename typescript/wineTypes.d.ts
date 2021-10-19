export interface Wine {
    id?: number
    name?: string
    varietal?: string
    vintage?:number
    color: string
}
export interface WineEncounter {
    id: number
    wine_id?: number
    wine_name: string
    bottle_price?: number
    purchase_location?: string
    rating?: number
    notes: string
    encounter_date: Date
}

export interface WineStoreContents {
    allWinesList: Wine[],
    currentWine: Wine
  }
  