// import { useState } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import './App.css'
// import { Grid } from '@material-ui/core'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

function App() {


  return (
    <PrimeReactProvider>
      <Header />
      {/* <Grid> */}
        {/* <Grid> */}
        {/*<List>/*}
        {/* </Grid> */}
        {/* <Grid> */}
          {/* <Map/> */}
        {/* </Grid> */}
      {/* </Grid> */}
    </PrimeReactProvider>
  )
}

export default App
