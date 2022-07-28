
import {
	gql,
	useQuery,
} from "@apollo/client";

const GET_USERS = gql`
query GetUsers{
	users{
		id,
		name,
		phone
	}
}
`

function DefultLaout() {

		
	const { loading, error, data } = useQuery(GET_USERS);

	// console.log('------------>', data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2 p-5 shadow-2xl rounded-2xl">
        <h1 className="mb-5 text-2xl font-bold text-center underline">
          GraphQL
        </h1>
        <table className="w-full border border-collapse">
          <thead>
            <tr>
              <th className="border text-center">#ID</th>
              <th className="border text-center">Name</th>
              <th className="border text-center">Phone</th>
            </tr>
          </thead>
					<tbody>
						{data.users.map(user => (
            <tr key={user.id}>
              <td className="border text-center">{user.id}</td>
								<td className="border text-center">{ user.name }</td>
								<td className="border text-center">{ user.phone }</td>
            </tr>
					))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DefultLaout;
