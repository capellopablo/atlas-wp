/* eslint-disable */
import React from 'react';
/* eslint-disable */

const TraceabilityHiddenFields = ({ userValues }) => {
  return (
    <>
      {/*gclid*/}
      <input name="00Nf400000UrbEA" type="hidden" value={userValues.gclid} />
      {/*utm_source*/}
      <input
        id="00Nf400000NDC1A"
        name="00Nf400000NDC1A"
        type="hidden"
        value={userValues.utm_source}
      />
      {/*utm_medium*/}
      <input
        id="00Nf400000NDC1j"
        name="00Nf400000NDC1j"
        type="hidden"
        value={userValues.utm_medium}
      />
      {/*utm_campaign*/}
      <input
        id="00Nf400000NDC23"
        name="00Nf400000NDC23"
        type="hidden"
        value={userValues.utm_campaign}
      />
      {/*utm_content*/}
      <input
        id="00Nf400000NDC2D"
        name="00Nf400000NDC2D"
        type="hidden"
        value={userValues.utm_content}
      />
      {/*utm_term*/}
      <input
        id="00Nf400000NDC2S"
        name="00Nf400000NDC2S"
        type="hidden"
        value={userValues.utm_term}
      />
      {/*_fbp*/}
      <input
        id="00N5G00000VliyS"
        name="00N5G00000VliyS"
        type="hidden"
        value={userValues.fbp}
      />
      {/*_fbc*/}
      <input
        id="00N5G00000Vm2mq"
        name="00N5G00000Vm2mq"
        type="hidden"
        value={userValues.fbc}
      />
      {/*_ga*/}
      <input
        id="00Nf400000TzUA9"
        name="00Nf400000TzUA9"
        type="hidden"
        value={userValues.ga}
      />
      {/*_gaex*/}
      <input
        id="00Nf400000UrwCC"
        name="00Nf400000UrwCC"
        type="hidden"
        value={userValues.gaex}
      />
      {/* Page URL */}
      <input
        id="00Nf400000NDISs"
        name="00Nf400000NDISs"
        type="hidden"
        value={(userValues.pageURL).toLowerCase()}
      />
      {/* IP Address */}
      <input
        id="00N5G00000VluQN"
        name="00N5G00000VluQN"
        type="hidden"
        value={userValues.ip_address}
      />
      {/* Referrer */}
      <input
        id="00Nf400000NDIRQ"
        name="00Nf400000NDIRQ"
        type="hidden"
        value={(userValues.referrer)?.toLowerCase()}
      />
      {/* User Agent */}
      <input
        id="00N5G00000Vm2n0"
        className="useragent-data"
        type="hidden"
        name="00N5G00000Vm2n0"
        value={userValues.userAgent}
      />
      {/* Record Type */}
      <input
        id="recordType"
        name="recordType"
        type="hidden"
        value={userValues.recordType}
      />
      {/* Form Name */}
      <input
        id="00Nf400000NDIXi"
        name="00Nf400000NDIXi"
        type="hidden"
        value={userValues.formName}
      />
      {/* Product ID */}
      <input
        name="product_id"
        type="hidden"
        value={window?.aprende21.ecommerce.productID}
      />

      {/* Content name */}
      <input
        name="content_name"
        type="hidden"
        value={window?.aprende21.ecommerce.ProductTitle}
      />
      {/* Product Category */}
      <input
        name="product_category"
        type="hidden"
        value={window?.aprende21.ecommerce.productCategories}
      />
    </>
  );
};

export default TraceabilityHiddenFields;
