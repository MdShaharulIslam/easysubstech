import { useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth"

const axiosSecure = axios.create({
  baseURL: "https://easysubstech-server.vercel.app",
})

const useAxiosSecure = () => {
  const navigate = useNavigate()
  const { logOut } = useAuth()

  useEffect(() => {
    // Add request interceptor
    const requestInterceptor = axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token")
        if (token) {
          config.headers.authorization = `Bearer ${token}`
        }
        return config
      },
      function (error) {
        return Promise.reject(error)
      }
    )

    // Add response interceptor
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        const status = error.response?.status

        if (status === 401 || status === 403) {
          navigate("/")
        }

        return Promise.reject(error)
      }
    )

    // Clean up interceptors when component is unmounted
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor)
      axiosSecure.interceptors.response.eject(responseInterceptor)
    }
  }, [logOut, navigate])

  return axiosSecure
}

export default useAxiosSecure
