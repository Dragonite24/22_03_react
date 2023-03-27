import { LoadingContext } from "components/LoadingProvider";
import { ResponseType } from "models/responseType";
import { UserType } from "models/userType";
import { useContext, useState } from "react";

type CustomFetch = {
  url: string
  method?: 'GET' | 'POST';
}

export const useFetch = ({ url, method = 'GET' }: CustomFetch) => {
  const { close, show, isLoading } = useContext(LoadingContext);
  const [data, setData] = useState<ResponseType<UserType>>();

  const customFetch = () => {
    show();
    fetch(url, { method }).then((el) => el.json().then((data) => {
      setData(data);
      close();
    }).catch(_ => {
      close();
    }));
  }

  return { customFetch, data, isLoading }
}