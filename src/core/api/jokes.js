const getJokes = async ()  =>  {
  return (await fetch('http://api.icndb.com/jokes/random/5')).json();
}

export {getJokes};