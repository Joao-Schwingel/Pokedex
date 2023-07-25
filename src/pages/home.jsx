import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import PokemonCard from '../components/PokemonCard'
import { Box, Grid } from '@mui/material'
import {Container} from "@mui/system"
import axios from 'axios'
import { Skeletons } from '../components/Squeleton'
import { useNavigate } from 'react-router-dom'

export const Home = ({setPokemonData}) => {
    const [pokemon, setPokemon] = useState([])
    
    const location = useNavigate()

    useEffect(() => {
        getPokemons() 
    }, []) 
    
    const getPokemons = () => {
        var endPoints = []
        for( var i = 1; i <= 96; i++){
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        axios.all(endPoints.map((endPoint) => (axios.get(endPoint)))).then((res) => setPokemon(res))
         
    }

    const pokemonFilter = (name) => {
        var filterPokemons = []
        if(name === ""){
            getPokemons()
        }
        for(var i in pokemon){
            if(pokemon[i].data.name.includes(name)){
                filterPokemons.push(pokemon[i])
            }
        }
        console.log(filterPokemons)
        setPokemon(filterPokemons)
    }

    const pokemonHandler = (pokemonData) => {
        setPokemonData(pokemonData)
        location("/profile")
    }

    return(
        <div>
            <NavBar pokemonFilter={pokemonFilter}/>
            <Container maxWidth = {false}>
                <Grid container spacing={3}>
                    {pokemon.length === 0 ? <Skeletons/> :
                    pokemon.map((pokemon, key) => 
                    (<Grid item xs={4} key={key}>
                        <Box onClick={() => pokemonHandler(pokemon.data)}>
                        <PokemonCard name = {pokemon.data.name} img = {pokemon.data.sprites.front_default} types = {pokemon.data.types}/>
                        </Box>
                    </Grid>))}
                </Grid>
            </Container>
        </div>
    )
}