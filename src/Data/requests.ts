export type request={
    id:number;
    title:string;
    body:string
};

const requests: request[]=[
    { id:1 , title:"Chicken Please", body:"Add more chicken!"},
    { id:2 , title:"Pork Please", body:"There's no Pork!"},
    { id:3 , title:"Less Salt", body:"Less Salt in this recipe."},
    { id:4 , title:"Needs more Kick", body:"Add some hot sauce or red chili flake."}
];

export default requests;