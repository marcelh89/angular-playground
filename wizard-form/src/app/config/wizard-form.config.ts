export default {
    "messages": {
      "error.required": "Bitte füllen sie das erforderliche Feld aus"
    },
    "steps": [
      {
        "id": 1,
        "title": "Personelle Infos",
        "rows": [
          {
            "title": "Partner",
            "columns": [
              {
                "fields": [
                  {
                    "type": "select",
                    "options": ["Ms", "Mr"],
                    "name": "salutation",
                    "label": "Anrede",
                    "placeholder": "",
                    "validators": ["required"]
                  },
                  {
                    "type": "text",
                    "name": "name",
                    "label": "Name",
                    "placeholder": "",
                    "validators": ["required"]
                  },
                  {
                    "type": "text",
                    "name": "prename",
                    "label": "Vorname",
                    "placeholder": "",
                    "validators": ["required"]
                  },
                  {
                    "type": "date",
                    "name": "birthdate",
                    "label": "Geburtsdatum",
                    "placeholder": "",
                    "validators": ["required",">= 18 Jahre?"]
                  }
                ]
              },
              {
                "fields": [
                  {
                    "type": "select",
                    "options": ["Dr", "Dr Dr"],
                    "name": "title",
                    "label": "Titel",
                    "placeholder": "",
                    "validators": []
                  },
                  {
                    "type": "text",
                    "name": "namesuffix",
                    "label": "Namenszusatz",
                    "placeholder": "",
                    "validators": []
                  },
                  {
                    "type": "select",
                    "options": ["Deutsch", "Polnisch"],
                    "name": "nationality",
                    "label": "Staatsangehörigkeit",
                    "placeholder": "",
                    "validators": []
                  },
                  {
                    "type": "date",
                    "name": "dateofdeath",
                    "label": "Sterbedatum",
                    "placeholder": "",
                    "validators": []
                  }
                ]
              }
            ]
          },
          {
            "title": "Anschrift",
            "columns": [
              {
                "fields": [
                  {
                    "type": "text",
                    "name": "firstName",
                    "label": "First Name",
                    "placeholder": "Enter your first name",
                    "validators": []
                  },
                  {
                    "type": "text",
                    "name": "lastname",
                    "label": "Last Name",
                    "placeholder": "Enter your first name",
                    "validators": []
                  }
                ]
              },
              {
                "fields": [
                  {
                    "type": "number",
                    "name": "age",
                    "label": "Age",
                    "placeholder": "Enter your age",
                    "validators": []
                  }
                ]
              }
            ]
          },
          {
            "title": "Tätigkeit",
            "columns": [
              {
                "fields": [
                  {
                    "type": "select",
                    "options": ["Manager", "Berater"],
                    "name": "job",
                    "label": "Beruf",
                    "placeholder": "",
                    "validators": []
                  }
                ]
              },
              {
                "fields": [
                  {
                    "type": "select",
                    "options": ["Versicherungen","IT-Services"],
                    "name": "business",
                    "label": "Branche",
                    "placeholder": "",
                    "validators": []
                  }
                ]
              }
  
  
            ]
          }
        ],
        "button.abort": "Abbrechen",
        "button.next": "OK"
      }
    ]
  } 