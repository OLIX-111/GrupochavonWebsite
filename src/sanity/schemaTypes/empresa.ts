import {defineType, defineField} from 'sanity'

export const empresa = defineType({
  name: 'empresa',
  title: 'Empresa',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required().min(3).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titulo',
        slugify: (input: string) =>
          input
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .slice(0, 96),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'imagenPrincipal',
      title: 'Imagen Principal',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto Alternativo',
            type: 'string',
            validation: (rule) => rule.required().warning('Importante para SEO y accesibilidad'),
        }),
        defineField({
          name: 'caption',
          title: 'Leyenda (opcional)',
          type: 'string',
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Cita', value: 'blockquote'},
          ],
          lists: [
            {title: 'Viñetas', value: 'bullet'},
            {title: 'Numerado', value: 'number'},
          ],
          marks: {
            decorators: [
              {title: 'Negrita', value: 'strong'},
              {title: 'Cursiva', value: 'em'},
              {title: 'Código', value: 'code'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Enlace',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (rule) => rule.uri({allowRelative: true, scheme: ['http', 'https']})
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Abrir en nueva pestaña',
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {type: 'image', options: {hotspot: true}},
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'orden',
      title: 'Orden (opcional)',
      type: 'number',
      description: 'Usar para ordenar manualmente las empresas',
    }),
    defineField({
      name: 'publicado',
      title: 'Publicado',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'titulo',
      media: 'imagenPrincipal',
      publicado: 'publicado',
    },
    prepare(selection) {
      const {title, media, publicado} = selection
      return {
        title: title || 'Sin título',
        media,
        subtitle: publicado ? 'Publicado' : 'Borrador',
      }
    },
  },
  orderings: [
    {
      title: 'Orden Manual',
      name: 'ordenAsc',
      by: [{field: 'orden', direction: 'asc'}],
    },
    {
      title: 'Título A-Z',
      name: 'tituloAsc',
      by: [{field: 'titulo', direction: 'asc'}],
    },
  ],
})
