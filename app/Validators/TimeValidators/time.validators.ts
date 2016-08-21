
export class TimeValidators{

  static Format(control:any){
    let value:string = control.value;
    if(value != null && value.match(/\d\d:\d\d/)){
      return null;
    }
    return {'Format':true};
  }
  static Hours(control:any){
    return true;
  }
  static Minutes(control:any){
    let value:string = control.value;
    if (value == null) {
      return {'Minutes':true};
    }
    let min:number = parseInt(value.substr(value.indexOf(':') + 1));
    let fails : boolean = min < 0 || min > 59;
    return fails ? {'Minutes':true} : null;
  }
}
