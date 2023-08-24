function minMax(arr){
    let n = arr.length;
    let max=0;
    let min=0;
    let ans = []
    if(arr.length==1){
        max=min = arr[0];
        ans.push(max,min);
        return ans;
    }
    if(arr.length==2){
        if(arr[0]>arr[1]){
            max=arr[0];
            min=arr[1]
        }
        else{
            max=arr[1];
            min=arr[0]
        }
        ans.push(max,min);
        return ans;
    }
    else{
        let mid = Math.floor(arr.length/2);
        // console.log(mid)
        let maxMin1,maxMin2;
        let max1=0;
        let max2=0;
        let min1=0;
        let min2=0;
         maxMin1= minMax(arr.slice(0,mid));
         maxMin2 = minMax(arr.slice(mid));
        //  console.log(maxMin1,maxMin2);
         [max1,min1]=maxMin1;
         [max2,min2]=maxMin2
        //  console.log(max1,max2,min1,min2)
        if(max1>max2){
            max= max1
        }
         if(max2>max1){
            max=max2
        }
        if(min1<min2){
            min = min1
        }
        if(min1>min2){
            min = min2
        }
        ans.push(max,min);
        return ans;
        

        
    }
}

console.log(minMax([4,7,10,15,730,8]))