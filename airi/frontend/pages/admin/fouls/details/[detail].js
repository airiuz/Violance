import { useRouter } from "next/router";

function FoulDetail() {
  const { detail } = useRouter().query;
  return <div></div>;
}

export default FoulDetail;
