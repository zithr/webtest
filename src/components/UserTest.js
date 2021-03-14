import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchUsers } from "../redux"

const UserTest = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div className="flex flex-1">
            <div className="container mx-auto">
                {userData.loading ? (
                    <h2>Loading text</h2>
                ) : userData.error ? (
                    <h2>{userData.error}</h2>
                ) : (
                    <div>
                        {" "}
                        <h2 className="py-2 text-xl font-bold">User List</h2>{" "}
                        {userData &&
                            userData.users &&
                            userData.users.map((user) => <p>{user.username}</p>)}
                    </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTest)
