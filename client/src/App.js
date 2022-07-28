import {
	ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import DefultLaout from "./layouts/DefultLaout";

const client = new ApolloClient({
	uri: "http://localhost:5000/api/graphql",
	cache: new InMemoryCache(),
});



function App() {

	console.log('graphql client loaded: ', client);

  return (
    <ApolloProvider client={client}>
      <DefultLaout/>
    </ApolloProvider>
  );
}

export default App;
