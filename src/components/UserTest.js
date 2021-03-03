import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchUsers } from "../redux"

const UserTest = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading text</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            {" "}
            <h2>User List</h2>{" "}
            {userData && userData.users && userData.users.map((user) => <p>{user.name}</p>)}
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
