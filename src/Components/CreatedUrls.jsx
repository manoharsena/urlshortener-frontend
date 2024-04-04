import React from "react";

const CreatedUrls = ({ responseData }) => {
  return (
    <div>
      <h1 className="text-center my-5">Created Urls </h1>
      <div className="table-responsive">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Long URL
              </th>
              <th scope="col" className="text-center">
                Short URL
              </th>
              <th scope="col" className="text-center">
                Clicks
              </th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((item, index) => {
              return item.urls.map((url, urlIndex) => {
                return (
                  <tr key={urlIndex}>
                    <td className="text-center">
                      <a href={url.longUrl} target="blank">
                        {url.longUrl}
                      </a>
                    </td>
                    <td className="text-center">{url.shortUrl}</td>
                    <td className="text-center">{url.clicks}</td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatedUrls;
