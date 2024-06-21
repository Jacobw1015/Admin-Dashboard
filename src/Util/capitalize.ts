export default function capitalize(value:string):string{
    if(value==""){
        return "Please enter a value";
    }
    const head = value[0].toUpperCase();
    const body = value.slice(1).toLowerCase();
    return head.concat(body);
}