import React, { useState, useEffect, useCallback } from "react";

export const UserScript = () => {

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    const tag = document.getElementById('user_script')
    if (tag && 'MutationObserver' in window) {

      const callback = () => {
        console.log(tag.dataset.myval)
        /*if(tag.dataset) {
          const data = JSON.parse(tag.dataset.myval)
          console.log(data)
        }*/
      };

      new MutationObserver(callback).observe(tag, {
        attributes: true, childList: true
      });
    }
  }

  return (<div id={'user_script'}></div>)
}
