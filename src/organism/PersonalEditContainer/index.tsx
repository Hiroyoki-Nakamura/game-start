import React from "react";
import Container from "../../atom/Container";
import PersonalEditForm from "../../molecule/PersonalEditForm";

const PersonalEditContainer: React.FC = () => {
    return(
        <Container className="p-4 border-solid border-red-500 border-2">
            <PersonalEditForm></PersonalEditForm>
        </Container>
    )
}

export default PersonalEditContainer;