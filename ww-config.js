export default {
  editor: {
    label: {
      en: 'Radio Group',
      fr: 'Groupe de boutons radio'
    },
    icon: 'radio-button',
    customStylePropertiesOrder: [
      'color',
      'fontSize',
      'fontWeight'
    ],
    customSettingsPropertiesOrder: [
      'options',
      'orientation',
      'size',
      'disabled',
      'helperText',
      'error',
      'valueKey',
      'labelKey',
      'descriptionKey'
    ]
  },
  properties: {
    options: {
      label: {
        en: 'Options',
        fr: 'Options'
      },
      type: 'Array',
      options: {
        item: {
          type: 'Object',
          options: {
            item: {
              label: {
                type: 'Text',
                options: {
                  placeholder: 'Option label'
                }
              },
              value: {
                type: 'Text',
                options: {
                  placeholder: 'Option value'
                }
              },
              description: {
                type: 'Text',
                options: {
                  placeholder: 'Option description (optional)'
                }
              },
              disabled: {
                type: 'OnOff',
                defaultValue: false
              }
            }
          }
        }
      },
      defaultValue: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
      ],
      bindable: true,
      section: 'settings'
    },
    orientation: {
      label: {
        en: 'Orientation',
        fr: 'Orientation'
      },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'vertical', label: { en: 'Vertical', fr: 'Verticale' } },
          { value: 'horizontal', label: { en: 'Horizontal', fr: 'Horizontale' } }
        ]
      },
      defaultValue: 'vertical',
      bindable: true,
      section: 'settings'
    },
    size: {
      label: {
        en: 'Size',
        fr: 'Taille'
      },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'sm', label: { en: 'Small', fr: 'Petit' } },
          { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
          { value: 'lg', label: { en: 'Large', fr: 'Grand' } }
        ]
      },
      defaultValue: 'default',
      bindable: true,
      section: 'settings'
    },
    disabled: {
      label: {
        en: 'Disabled',
        fr: 'Désactivé'
      },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'settings'
    },
    helperText: {
      label: {
        en: 'Helper text',
        fr: 'Texte d\'aide'
      },
      type: 'Text',
      bindable: true,
      multiLang: true,
      section: 'settings'
    },
    error: {
      label: {
        en: 'Error message',
        fr: 'Message d\'erreur'
      },
      type: 'Text',
      bindable: true,
      multiLang: true,
      section: 'settings'
    },
    valueKey: {
      label: {
        en: 'Value key',
        fr: 'Clé de valeur'
      },
      type: 'Text',
      defaultValue: 'value',
      bindable: true,
      section: 'settings',
      options: {
        placeholder: 'value'
      }
    },
    labelKey: {
      label: {
        en: 'Label key',
        fr: 'Clé de libellé'
      },
      type: 'Text',
      defaultValue: 'label',
      bindable: true,
      section: 'settings',
      options: {
        placeholder: 'label'
      }
    },
    descriptionKey: {
      label: {
        en: 'Description key',
        fr: 'Clé de description'
      },
      type: 'Text',
      defaultValue: 'description',
      bindable: true,
      section: 'settings',
      options: {
        placeholder: 'description'
      }
    },
    customClass: {
      label: {
        en: 'Custom CSS class',
        fr: 'Classe CSS personnalisée'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    labelClass: {
      label: {
        en: 'Label CSS class',
        fr: 'Classe CSS du libellé'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    descriptionClass: {
      label: {
        en: 'Description CSS class',
        fr: 'Classe CSS de la description'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    helperClass: {
      label: {
        en: 'Helper CSS class',
        fr: 'Classe CSS de l\'aide'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    },
    errorClass: {
      label: {
        en: 'Error CSS class',
        fr: 'Classe CSS de l\'erreur'
      },
      type: 'Text',
      bindable: true,
      section: 'style'
    }
  },
  triggerEvents: [
    {
      name: 'change',
      label: {
        en: 'On change',
        fr: 'Au changement'
      },
      event: {
        value: 'Selected value',
        option: 'Selected option object'
      }
    }
  ]
} 