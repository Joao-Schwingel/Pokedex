import { Container, Skeleton } from "@mui/material"
import React from "react"

export const Skeletons = () => {
    return (
        <Container maxWidth={false}>
            <Skeleton variant="rounded" width="100%" height={250} sx = {{marginBottom: "1em"}}/>
            <Skeleton variant="rounded" width="100%" height={250} sx = {{marginBottom: "1em"}}/>
            <Skeleton variant="rounded" width="100%" height={250} sx = {{marginBottom: "1em"}}/>
            <Skeleton variant="rounded" width="100%" height={250} sx = {{marginBottom: "1em"}}/>
            <Skeleton variant="rounded" width="100%" height={250} sx = {{marginBottom: "1em"}}/>
            <Skeleton variant="rounded" width="100%" height={250} sx = {{marginBottom: "1em"}}/>
            
        </Container>
    )
}