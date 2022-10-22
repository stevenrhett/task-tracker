import React from 'react';
import { Auth, Typography, Button } from "@supabase/ui";
import { createClient } from "@supabase/supabase-js";

const { Text } = Typography

// Create a single supabase client for interacting with your database
const supabase = createClient(
    "https://edimwgfgsphnlyquzwnq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkaW13Z2Znc3Bobmx5cXV6d25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYyNzE4MTQsImV4cCI6MTk4MTg0NzgxNH0.Xd5Kn4xIb0rprxFP6YhtkuR7C_oldXAQeyFGALLiHIE"
);

const Container = (props) => {
    const { user } = Auth.useUser();
    if (user)
        return (
            <>
                <Text>Signed in: {user.email}</Text>
                <Button block onClick={() => props.supabaseClient.auth.signOut()}>
                    Sign out
                </Button>
            </>
        );
    return props.children;
};

export default function Home() {
    return (
        <Auth.UserContextProvider supabaseClient={supabase}>
            <Container supabaseClient={supabase}>
                <Auth providers={['google', 'linkedin']} supabaseClient={supabase}/>
            </Container>
        </Auth.UserContextProvider>
    )};