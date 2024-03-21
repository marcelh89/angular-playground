export default {
  messages: {
    'error.required': 'Bitte füllen sie das erforderliche Feld aus',
    'button.previous': 'Zurück',
    'button.next': 'OK',
    'button.submit': 'Erstellen'
  },
  steps: [
    {
      id: 1,
      title: 'Personelle Infos',
      rows: [
        {
          title: 'Partner',
          columns: [
            {
              id: 1,
              fields: [
                {
                  type: 'select',
                  options: ['Ms', 'Mr'],
                  name: 'salutation',
                  label: 'Anrede',
                  placeholder: '',
                  validators: ['required'],
                },
                {
                  type: 'text',
                  name: 'name',
                  label: 'Name',
                  placeholder: '',
                  validators: ['required'],
                },
                {
                  type: 'text',
                  name: 'prename',
                  label: 'Vorname',
                  placeholder: '',
                  validators: ['required'],
                },
                {
                  type: 'date',
                  name: 'birthdate',
                  label: 'Geburtsdatum',
                  placeholder: '',
                  validators: ['required', '>= 18 Jahre?'],
                },
              ],
            },
            {
              id: 2,
              fields: [
                {
                  type: 'select',
                  options: ['Dr', 'Dr Dr'],
                  name: 'title',
                  label: 'Titel',
                  placeholder: '',
                  validators: [],
                },
                {
                  type: 'text',
                  name: 'namesuffix',
                  label: 'Namenszusatz',
                  placeholder: '',
                  validators: [],
                },
                {
                  type: 'select',
                  options: ['Deutsch', 'Polnisch'],
                  name: 'nationality',
                  label: 'Staatsangehörigkeit',
                  placeholder: '',
                  validators: [],
                },
                {
                  type: 'date',
                  name: 'dateofdeath',
                  label: 'Sterbedatum',
                  placeholder: '',
                  validators: [],
                },
              ],
            },
          ],
        },
        {
          title: 'Anschrift',
          columns: [
            {
              id: 1,
              fields: [
                {
                  type: 'text',
                  name: 'street',
                  label: 'Straße',
                  placeholder: '',
                  validators: [],
                },
                {
                  type: 'text',
                  name: 'zipcode',
                  label: 'Postleitzahl',
                  placeholder: '',
                  validators: [],
                },
              ],
            },
            {
              id: 2,
              fields: [
                {
                  type: 'text',
                  name: 'housenumber',
                  label: 'Hausnummer',
                  placeholder: '',
                  validators: [],
                },
                {
                  type: 'text',
                  name: 'location',
                  label: 'Ort',
                  placeholder: '',
                  validators: [],
                },
              ],
            },
          ],
        },
      ],

    },
    {
      id: 1,
      title: 'Weitere Infos',
      rows: [
        {
          title: 'Weitere',
          columns: [
            {
              id: 1,
              fields: [
                {
                  type: 'text',
                  name: 'furtherinfo',
                  label: 'Weitere Infos',
                  placeholder: '',
                  validators: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
