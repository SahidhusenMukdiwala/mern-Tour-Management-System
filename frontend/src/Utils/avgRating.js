const calculateAvgRating = reviews =>{
    const totalRating = reviews?.reduce((acc,item) => acc + item.rating,0)
    const avgRating = totalRating === 0
     ? ""
     : totalRating === 1 
     ? totalRating
     : (totalRating / reviews?.length).toFixed(1);

//     const totalRatings = reviews?.reduce((acc,item)=>acc+item.rating,0)
// const avgRating = 
// totalRatings === 0    
//  ? ''
//  : totalRatings === 1
//  ? totalRatings
//  : totalRatings / reviews?.length
     return {
        totalRating,
        avgRating,
     };
}




export default calculateAvgRating;