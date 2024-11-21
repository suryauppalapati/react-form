import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import Select from "react-select";

const options = {
  destination_type: [
    { value: "bigquery", label: "BigQuery" },
    { value: "datalake", label: "DataLake" },
  ],
  summ_destination_table_name: [
    { value: "feature_store.db_workml", label: "feature_store.db_workml" },
    { value: "feature_store.db_bigdata", label: "feature_store.db_bigdata" },
  ],
  summ_destination_type: [
    { value: "delta", label: "Delta" },
    { value: "alpha", label: "Alpha" },
  ],
  anomaly_input_col: [
    { value: "net_amt", label: "net_amt" },
    { value: "item_case_fcst", label: "item_case_fcst" },
    { value: "probability_oos", label: "probability_oos" },
    { value: "similarity_nlp", label: "similarity_nlp" },
  ],
  primary_keys: [
    { value: "division_id", label: "division_id" },
    { value: "rog_id", label: "rog_id" },
    { value: "store_id", label: "store_id" },
    { value: "loc_id", label: "loc_id" },
  ],
  grouping_keys: [
    { value: "division_id", label: "division_id" },
    { value: "category_id", label: "category_id" },
    { value: "shelf_cd", label: "shelf_cd" },
    { value: "loc_id", label: "loc_id" },
  ],
  run_schedule: [
    { value: "sunday", label: "Sunday" },
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
    { value: "daily", label: "Daily" },
  ],
  algo_params: [
    { value: "None", label: "None" },
    { value: "null", label: "Null" },
    { value: "dictionary", label: "Dictionary inside a string" },
  ],
};

const InputForm = () => {
  const [formData, setFormData] = useState({
    model_name: "",
    source_table_name: "",
    source_type: "",
    destination_table_name: "",
    destination_type: "",
    summ_destination_table_name: [],
    summ_destination_type: "",
    anomaly_input_col: [],
    primary_keys: [],
    grouping_keys: [],
    creation_timestamp: "",
    pipeline_run_date_col: "",
    filter_by_date_range: false,
    date_col_dropdown: null,
    end_date: null,
    date_interval: null,
    run_schedule: "",
    algo_params: null,
    email_list: "",
    alert_threshold: "",
    alerting_topk_runs: "",
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} className='p-4'>
      <Row className='mb-3'>
        <Col>
          <Form.Label>Model Name</Form.Label>
          <Form.Control
            type='text'
            value={formData.model_name}
            onChange={(e) => handleChange("model_name", e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Source Table Name</Form.Label>
          <Form.Control
            type='text'
            value={formData.source_table_name}
            onChange={(e) => handleChange("source_table_name", e.target.value)}
          />
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col>
          <Form.Label>Source Type</Form.Label>
          <Form.Control
            type='text'
            value={formData.source_type}
            onChange={(e) => handleChange("source_type", e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Destination Table Name</Form.Label>
          <Form.Control
            type='text'
            value={formData.destination_table_name}
            onChange={(e) => handleChange("destination_table_name", e.target.value)}
          />
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col>
          <Form.Label>Destination Type</Form.Label>
          <Select
            options={options.destination_type}
            onChange={(selected) => handleChange("destination_type", selected.value)}
          />
        </Col>
        <Col>
          <Form.Label>Summ Destination Table Name</Form.Label>
          <Select
            options={options.summ_destination_table_name}
            onChange={(selected) => handleChange("summ_destination_table_name", selected.value)}
          />
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col>
          <Form.Label>Summ Destination Type</Form.Label>
          <Select
            options={options.summ_destination_type}
            onChange={(selected) => handleChange("summ_destination_type", selected.value)}
          />
        </Col>
        <Col>
          <Form.Label>Anomaly Input Col</Form.Label>
          <Select
            isMulti
            options={options.anomaly_input_col}
            onChange={(selected) =>
              handleChange(
                "anomaly_input_col",
                selected.map((item) => item.value)
              )
            }
          />
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col>
          <Form.Label>Primary Keys</Form.Label>
          <Select
            isMulti
            options={options.primary_keys}
            onChange={(selected) =>
              handleChange(
                "primary_keys",
                selected.map((item) => item.value)
              )
            }
          />
        </Col>
        <Col>
          <Form.Label>Grouping Keys</Form.Label>
          <Select
            isMulti
            options={options.grouping_keys}
            onChange={(selected) =>
              handleChange(
                "grouping_keys",
                selected.map((item) => item.value)
              )
            }
          />
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col>
          <Form.Label>Creation Timestamp</Form.Label>
          <Form.Control
            type='date'
            value={formData.creation_timestamp}
            onChange={(e) => handleChange("creation_timestamp", e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Pipeline Run Date Col</Form.Label>
          <Form.Control
            type='text'
            value={formData.pipeline_run_date_col}
            onChange={(e) => handleChange("pipeline_run_date_col", e.target.value)}
          />
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col>
          <Form.Label>Filter By Date Range</Form.Label>
          <Form.Check
            type='checkbox'
            checked={formData.filter_by_date_range}
            onChange={(e) => handleChange("filter_by_date_range", e.target.checked)}
          />
        </Col>
        <Col>
          <Form.Label>Date Col Dropdown</Form.Label>
          <Form.Control
            type='text'
            value={formData.date_col_dropdown}
            onChange={(e) => handleChange("date_col_dropdown", e.target.value)}
          />
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col>
          <Form.Label>Run Schedule</Form.Label>
          <Select options={options.run_schedule} onChange={(selected) => handleChange("run_schedule", selected.value)} />
        </Col>
        <Col>
          <Form.Label>Algo Params</Form.Label>
          <Select options={options.algo_params} onChange={(selected) => handleChange("algo_params", selected.value)} />
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col>
          <Form.Label>Email List</Form.Label>
          <Form.Control
            type='text'
            value={formData.email_list}
            placeholder='Enter emails separated by commas'
            onChange={(e) => handleChange("email_list", e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label>Alert Threshold</Form.Label>
          <Form.Control
            type='number'
            value={formData.alert_threshold}
            onChange={(e) => handleChange("alert_threshold", e.target.value)}
          />
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col>
          <Form.Label>Alerting TopK Runs</Form.Label>
          <Form.Control
            type='number'
            value={formData.alerting_topk_runs}
            onChange={(e) => handleChange("alerting_topk_runs", e.target.value)}
          />
        </Col>
      </Row>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default InputForm;
