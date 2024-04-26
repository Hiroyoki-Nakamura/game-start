import React from "react";
import Container from "../../atom/Container";
import UserEditForm from "../../molecule/UserEditForm";

const UserEditContainer: React.FC = () => {
    return(
        <Container className="p-4 border-solid border-red-500 border-2">
            <UserEditForm></UserEditForm>
        </Container>
    )
}

export default UserEditContainer;