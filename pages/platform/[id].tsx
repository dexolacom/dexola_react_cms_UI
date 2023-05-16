// "use client";

import axios from "axios";

const PlatformItem = ({ platform }: any) => {
  console.log(platform);
  return (
    <div>
      PlatformItem
      <br />
      {"ID" + platform.id}
      <br />
      {"ID" + platform.attributes.data.name}
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await axios.get("http://localhost:1337/api/details");
  const detailsData = response.data.data;

  const paths = detailsData.map((detail: any) => ({
    params: { id: String(detail.id) },
  }));
  console.log(" -=-=-=- paths", paths);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const { id } = params;
  console.log("id getStaticProps", id);
  const response = await axios.get(`http://localhost:1337/api/details/${id}`);
  const detailData = response.data;

  const platform = detailData.data;

  return {
    props: {
      platform,
    },
  };
};

export default PlatformItem;

// const PlatformItem = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [platform, setPlatform] = useState<any>();

//   const getDetailsAll = async () => {
//     const response = await axios.get(`http://localhost:1337/api/details`);
//     const res = response.data.data.filter((el: any) => el.id === Number(id));
//     console.log("res", res);
//   };

//   const fetchData = async (id: string) => {
//     const datailsData = await getDetails(id);
//     console.log("datailsData", datailsData);
//   };

//   useEffect(() => {
//     getDetailsAll();
//     if (id) {
//       fetchData(String(id));
//     }
//   }, [id]);

//   return (
//     <div>
//       PlatformItem
//       <p>id = {id}</p>
//     </div>
//   );
// };

// export default PlatformItem;
