import { DireflowComponent } from 'direflow-component'
import { createServer } from 'miragejs'
import App from './App'

const createSearchEngine = () => {
  if (process.env.NODE_ENV !== 'production') {
    createServer({
      routes() {
        this.get("/api/search-tweets", () => ({
          tweets: [
            { id: 1, text: "Aus cuyy" },
            { id: 2, text: "Malem malem pengen McD..." },
            { id: 3, text: "Jokowi pulang aja!!" },
          ],
        }))
      },
    })
  }
  
  return DireflowComponent.create({
    component: App,
    configuration: {
      tagname: 'search-engine',
    },
    plugins: [
      {
        name: 'font-loader',
        options: {
          google: {
            families: ['Poppins', 'Advent Pro', 'Noto Sans JP'],
          },
        },
      },
    ],
  })
}

export default createSearchEngine()
