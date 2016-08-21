
export class ListValidators{

  static Required(control:any){
    console.log(control);
    let value:number = +control.value.length;
    console.log(value);
    if(value != null && value > 0){
      return null;
    }
    return {'Required':true};
  }
}
