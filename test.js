const getInitial = (name) => {
  let full_name = name.split(" ");
  let initial1 = full_name[0].substring(0, 1).toUpperCase();
  if (full_name.length > 1) {
    let initial2 = full_name[1].substring(0, 1).toUpperCase();
    const Initials = `${initial1}${initial2}`;
    console.log(Initials);
  } else {
    console.log(initial1);
  }
};
getInitial("james smith");
