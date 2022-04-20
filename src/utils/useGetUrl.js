import React, { useState } from 'react'
import { store } from './getStore'
import { urls } from '../https/config'
import { useDispatch, useSelector } from 'react-redux'

const useGetUrl = () => {
    const state = store.getState()
    const restaurantName = state.Auth.restaurantName
    const { suffixSubdomainUrl, rootUrl, prefixSubdomainUrl } = urls
    const restaurantUrl = `${prefixSubdomainUrl}${restaurantName}.${suffixSubdomainUrl}/`

    return { restaurantUrl, restaurantName }
}

export default useGetUrl
