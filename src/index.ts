import _ from 'underscore';

type Profile = {
  firstname: string;
  lastname: string;
}

const run = async () => {
  console.log('run');

  const profile : Profile = {
    firstname: 'Jean',
    lastname: 'Bombeur',
  };
  console.log(profile.firstname, profile.lastname);
  
  console.log('done');
}

run().catch(e => console.log(e));