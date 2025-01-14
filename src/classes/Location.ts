import { Address } from '@/classes/Address'
import { AddressName } from '@/classes/AddressName'
import { LatLng } from '@/classes/LatLng'

export class Location {
    id: number
    name: string
    postalCode: string
    address: Address
    city: AddressName
    state: AddressName
    location: LatLng
  
    constructor(
      id: number,
      name: string,
      postalCode: string,
      address: Address,
      city: AddressName,
      state: AddressName
    ) {
      this.id = id
      this.name = name
      this.postalCode = postalCode
      this.address = address
      this.city = city
      this.state = state
    }
  }