import React from 'react'
import './App.css'
// import { ApolloProvider } from 'react-apollo'
// import ApolloClient from 'apollo-client'

//icons

//importar componentes
import Navbar from './components/Navbar/Navbar'
import Showcase from './components/Showcase/Showcase'
import Newscards from './components/news/news-cards'
import Pye from './components/Pye/promosandevents'
import Lph from './components/Lastproductshome/Lph'
import Foot from './components/Foot/foot'

// const client = new ApolloClient({
// 	uri: 'http://localhost:4000/graphql',
// 	onerror: ({ networkError, graphQLErrors }) => {
// 		console.log('graphQLErrors', graphQLErrors)
// 		console.log('networkError', networkError)
// 	}
// })

function App() {
	return (
		// <ApolloProvider client={client}>
		<>
			<Navbar />
			<Showcase />
			<Newscards />
			<Pye />
			<Lph carouselId='carousel' />
			<Foot />
		</>
		// </ApolloProvider>
	)
}

export default App
