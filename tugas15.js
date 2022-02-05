function segitiga(){
  let sisiAb = 8;
      sisiBc = 6;
      sisiAc = Math.pow(sisiAb,2) + Math.pow(sisiBc,2);
  
  console.log("Nilai AB : " + sisiAb);
  console.log("Nilai BC : " + sisiBc);
  return "panjang sisi AC pada segitiga siku-siku tersebut adalah :" + Math.sqrt(sisiAc);
}

console.log(segitiga());