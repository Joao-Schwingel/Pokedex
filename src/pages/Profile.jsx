import React from 'react'
import NavBar from '../components/NavBar'
import { Box, Chip, Container, Divider, Paper, Typography } from "@mui/material"
import PokemonTable from '../components/PokemonTable'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



export const Profile = ({pokemonData}) => {
    const {name, sprites, moves} = pokemonData || {}
    
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!pokemonData){
            navigate("/")
        }
    }, []);

    if(!pokemonData){
        return null;
    }

    return (
        <>
        <NavBar hideSearch/>
        <Container maxWidth = 'md' >
            <Paper elevation={3}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} padding={10} >
                <Typography variant="h3">{name}</Typography>
                <Box display={'flex'} alignItems={'center'} width={'100%'} m={5}>
                    <Box component="img" src={sprites.front_default} width="70%" height="100%"/>
                    <PokemonTable pokemonData={pokemonData}></PokemonTable>
                </Box>
                <Box width={'100%'}>
                    <Divider>Shiny</Divider>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Box component="img" src={sprites.front_shiny} width="30%" height="30%"/>
                    </Box>
                    <Divider>Ataques</Divider>
                    {moves.map((moveData, key) => (
                        <Chip key={key} sx={{m:'5px'}} label={moveData.move.name} />
                    ))
                    }
                </Box>
                </Box>
            </Paper>
        </Container>
        </>
    )
}