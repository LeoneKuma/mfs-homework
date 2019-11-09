var region=require("./data")
module.exports=class {

     getProvince() {
        var provinceArry = [];
        for (var x in region) {
          // if(region[x].region.name==regionName){
          // }
          provinceArry.push(region[x].region.name);
        }
        //console.log(regionNameArry);
        return provinceArry;
      }
      
      getCitys(provinceName) {
        var citys = [];
        for (var x in region) {
          if (region[x].region.name == provinceName) {
            var cityArry = region[x].region.state;
            for (var y in cityArry) {
              citys.push(cityArry[y].name);
            }
            break;
          }
        }
        //console.log(citys);
        return citys;
      }
      
      getDistricts(provinceName, cityName) {
        var districts = [];
        for (var x in region) {
          if (region[x].region.name == provinceName) {
            var cityArry = region[x].region.state;
            for (var y in cityArry) {
              if (cityArry[y].name == cityName) {
                var districtArry = cityArry[y].city;
                for (var z in districtArry) {
                  districts.push(districtArry[z].name);
                }
                console.log(districts);
                return districts;
              }
            }
          }
        }
        return [];
      }
}