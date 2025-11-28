"use client"

import {Button} from "@heroui/button";
import {testAuth} from "@/lib/actions/auth-actions";
import {handleError, successToast} from "@/lib/util";

export default function AuthTestButton() {
    const onPress = async () => {
        const { data, error } = await testAuth();
        if (error) {
            handleError(error);
        }
        if (data) {
            successToast(data);
        }
        
    }
    
    return (
        <Button
            color="success"
            onPress={onPress}
        >
            Test Auth
        </Button>
    );
}