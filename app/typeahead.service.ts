
export class TypeaheadService{

    getDataProvider() : any[] {
            return[
                    {
                        id: 'e',
                        name: "user",
                        properties: [{
                                        id: "p",
                                        name: "age",
                                        operators:[{id: "o", name: "between"},{id: "o", name: "equalTo"},{id: "o", name: "lessThan"},{id: "o", name: "graterThan"}]
                                     },
                                     {
                                        id: "p",
                                        name: "gender",
                                        operators:[{id: "o", name: "equalTo"}]
                                     }
                                    ]                      
                    },
                    {
                        id: 'e',
                        name: "employe",
                        properties: [{
                                        id: "p",
                                        name: "e-age",
                                        operators:[{id: "o", name: "equalTo"},{id: "o", name: "lessThan"},{id: "o", name: "graterThan"}]
                                     },
                                     {
                                        id: "p",
                                        name: "e-gender",
                                        operators:[{id: "o", name: "equalTo"}]
                                     }
                                    ]                     
                    }
                  ]
             }
}