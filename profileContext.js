// react
import { createContext, useReducer } from "react";
// config
import { REKLAW_CONTENT } from "./profileContent";

const ProfileContext = createContext();

function profileReducer(state, action) {
    switch (action.type) {
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function ProfileProvider({ children }) {
    const initialState = {
        profile: REKLAW_CONTENT,
        content: REKLAW_CONTENT,
        pfp: REKLAW_CONTENT.profileImg
    }
    
    const [state, dispatch] = useReducer(profileReducer, initialState);

    return (
        <ProfileContext.Provider
            value={{
                profile: state.profile,
                content: state.content,
                pfp: state.pfp
            }}
        >
            {children}
        </ProfileContext.Provider>
    )

}

export { ProfileContext, ProfileProvider };