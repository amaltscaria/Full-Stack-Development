const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
 const res = cb(result);
 return res; 
};
addAndHandle(10, 20, (res) => {
  console.log(res);
  return res ;
});
