import { type SchemaTypeDefinition } from 'sanity'
import { empresa } from './empresa'
import { noticia } from './noticia'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [empresa, noticia],
}
