class ParkingSystem {
  /**
   * @param {number} big
   * @param {number} medium
   * @param {number} small
   */
  constructor(big, med, small) {
    console.log(big,med,small)
  this.big = big 
  this.med = med 
  this.small = small
  }

  /**
   * @param {number} carType
   * @return {boolean}
   */

  addCar(carType) {

    const bigArr = []
    const medAr = []
    const smallArr = []

    if(carType === 1) {
      console.log(carType)
      bigArr.push(carType)
    }
   
   if(carType === 1 && this.big){
     bigArr.push(carType)
     //console.log(bigArr.length)
     return true
   }
   if(carType === 2 && this.med ){
     return true
    }
    
    if(carType === 1 && this.small){
      return true
    }
    
    else {
      return false 
    }
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
module.exports = ParkingSystem;