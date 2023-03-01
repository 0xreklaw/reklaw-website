import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button, Pane, Label, Textarea, TextInput } from 'evergreen-ui'

function OutreachForm() {
    const [state, handleSubmit] = useForm("mlevrkee");
    if (state.succeeded) {
        return <p>{"Thanks for your submission! I'll get back to you when I'm free."}</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <Label htmlFor="email" marginBottom={4} display="block">Email</Label>
            <TextInput type="email" name="email" id="email" size="large" />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <Pane>
                <Label htmlFor="message" marginBottom={4} display="block" style={{marginTop: "1rem"}}>Message</Label>
                <Textarea autoComplete="off" name="message" id="message" size="large" />
            </Pane>
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <Button type="submit" size="large" disabled={state.submitting} style={{marginTop: "1rem"}}>Submit</Button>
        </form>
    );
}

export default OutreachForm;