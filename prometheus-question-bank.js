/**
 * Prometheus Essentials — Question Bank
 *
 * Format:
 *   window.PROM_QUESTION_BANK = {
 *     m1: { s1: [{q, options, correctIndex, explanation, difficulty}, ...], s2: [...] },
 *     m2: { s1: [...] },
 *     ...
 *   };
 *
 * Difficulty: 'easy' | 'medium' | 'hard'
 * IDs are stable strings (prom-mN-sM-iX) so analytics can track per-question stats.
 */
window.PROM_QUESTION_BANK = {
  "m1": {
    "s1": [
      {
        "id": "prom-m1-s1-i1",
        "q": "Which CNCF project is Prometheus considered the de-facto standard for in cloud-native environments?",
        "options": [
          "Distributed tracing",
          "Metrics monitoring and alerting",
          "Container orchestration",
          "Service mesh"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Prometheus is the de-facto standard for metrics monitoring and alerting in cloud-native environments, donated to the CNCF in 2016."
      },
      {
        "id": "prom-m1-s1-i2",
        "q": "Which model does Prometheus use to collect metrics from targets?",
        "options": [
          "Push",
          "Pull",
          "Stream",
          "Event-driven"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Prometheus uses a pull-based model — it scrapes /metrics endpoints from targets at regular intervals."
      },
      {
        "id": "prom-m1-s1-i3",
        "q": "What query language is built into Prometheus for slicing and aggregating data?",
        "options": [
          "SQL",
          "GraphQL",
          "PromQL",
          "InfluxQL"
        ],
        "correctIndex": 2,
        "difficulty": "easy",
        "explanation": "PromQL (Prometheus Query Language) is the built-in language used to query and aggregate time-series data."
      },
      {
        "id": "prom-m1-s1-i4",
        "q": "Where was Prometheus originally built before being donated to the CNCF?",
        "options": [
          "Google",
          "SoundCloud",
          "Uber",
          "Netflix"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Prometheus was originally built at SoundCloud in 2012 and donated to the CNCF in 2016."
      }
    ],
    "s2": [
      {
        "id": "prom-m1-s2-i1",
        "q": "What HTTP endpoint does Prometheus typically scrape from targets?",
        "options": [
          "/health",
          "/metrics",
          "/stats",
          "/prom"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "By convention, applications expose a /metrics HTTP endpoint that Prometheus scrapes."
      },
      {
        "id": "prom-m1-s2-i2",
        "q": "Which Prometheus component is the exception that handles short-lived batch jobs that finish before they can be scraped?",
        "options": [
          "Alertmanager",
          "Pushgateway",
          "node_exporter",
          "Recording rules"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Pushgateway buffers metrics from short-lived jobs and lets Prometheus scrape them after the job has ended."
      },
      {
        "id": "prom-m1-s2-i3",
        "q": "What is the default scrape_interval in Prometheus?",
        "options": [
          "5 seconds",
          "15 seconds",
          "30 seconds",
          "60 seconds"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "The default scrape_interval is 15 seconds, balancing freshness with target load."
      },
      {
        "id": "prom-m1-s2-i4",
        "q": "Why is the pull model considered more firewall-friendly than push?",
        "options": [
          "Targets need outbound access to Prometheus",
          "Only Prometheus needs outbound access to targets, not the reverse",
          "Pull bypasses firewall rules entirely",
          "Pull uses UDP instead of TCP"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "With pull, only Prometheus needs network access to targets. Targets do not need to reach out to Prometheus, simplifying firewall configuration."
      }
    ],
    "s3": [
      {
        "id": "prom-m1-s3-i1",
        "q": "Which component receives alerts from Prometheus and routes them to receivers like Slack or PagerDuty?",
        "options": [
          "Pushgateway",
          "Alertmanager",
          "Recording rule engine",
          "Grafana"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Alertmanager handles deduplication, grouping, silencing, and routing of alerts fired by Prometheus."
      },
      {
        "id": "prom-m1-s3-i2",
        "q": "What is the role of an exporter in the Prometheus ecosystem?",
        "options": [
          "It alerts on metric thresholds",
          "It translates non-Prometheus metrics into the Prometheus format",
          "It visualises dashboards",
          "It stores long-term metrics"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Exporters are small agents that translate metrics from third-party systems (e.g. MySQL, node OS) into the Prometheus exposition format."
      },
      {
        "id": "prom-m1-s3-i3",
        "q": "Which language is NOT commonly supported by official Prometheus client libraries?",
        "options": [
          "Go",
          "Java",
          "Python",
          "Fortran"
        ],
        "correctIndex": 3,
        "difficulty": "medium",
        "explanation": "Official client libraries exist for Go, Java, Python, Ruby, and others — but not Fortran."
      },
      {
        "id": "prom-m1-s3-i4",
        "q": "What does the Prometheus Server NOT do natively?",
        "options": [
          "Scrape targets",
          "Evaluate alerting rules",
          "Send notifications to Slack/PagerDuty",
          "Store TSDB data"
        ],
        "correctIndex": 2,
        "difficulty": "medium",
        "explanation": "The Prometheus Server fires alerts but Alertmanager is responsible for actually delivering notifications."
      }
    ],
    "s4": [
      {
        "id": "prom-m1-s4-i1",
        "q": "What is the main configuration file for a Prometheus server?",
        "options": [
          "prom.conf",
          "prometheus.yml",
          "config.json",
          "scrape.toml"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "prometheus.yml is the canonical YAML config file containing global, scrape_configs, alerting and rule_files settings."
      },
      {
        "id": "prom-m1-s4-i2",
        "q": "Which internal Prometheus subsystem evaluates recording and alerting rules at intervals?",
        "options": [
          "Scrape manager",
          "Rule manager",
          "Storage engine",
          "Service discovery"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "The rule manager evaluates rules at the configured evaluation_interval and writes results to the TSDB or fires alerts."
      },
      {
        "id": "prom-m1-s4-i3",
        "q": "Inside the Prometheus server, what does the 'scrape manager' do?",
        "options": [
          "Routes notifications to receivers",
          "Coordinates HTTP scrapes against discovered targets",
          "Compacts TSDB blocks",
          "Handles federation"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "The scrape manager schedules and executes HTTP scrapes against the targets discovered by service discovery."
      }
    ],
    "s5": [
      {
        "id": "prom-m1-s5-i1",
        "q": "What does the Prometheus Operator's ServiceMonitor CRD do?",
        "options": [
          "Defines alert routing rules",
          "Selects Kubernetes Services to be scraped by Prometheus",
          "Configures Grafana dashboards",
          "Manages TSDB block compaction"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "ServiceMonitor selects Kubernetes Services (by labels) and tells Prometheus to scrape them — a declarative scrape config."
      },
      {
        "id": "prom-m1-s5-i2",
        "q": "Which Helm chart is the most popular way to install a full Prometheus stack on Kubernetes?",
        "options": [
          "prometheus-helm",
          "kube-prometheus-stack",
          "prom-stack",
          "k8s-monitoring"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "kube-prometheus-stack bundles Prometheus, Alertmanager, Grafana, kube-state-metrics, node_exporter and operator CRDs."
      },
      {
        "id": "prom-m1-s5-i3",
        "q": "Which CRD does the Prometheus Operator use to manage Alertmanager configuration declaratively?",
        "options": [
          "AlertmanagerConfig",
          "AlertRoute",
          "AlertChannel",
          "Notification"
        ],
        "correctIndex": 0,
        "difficulty": "hard",
        "explanation": "AlertmanagerConfig allows scoped, namespace-level Alertmanager routing/receiver configuration via the operator."
      }
    ],
    "s6": [
      {
        "id": "prom-m1-s6-i1",
        "q": "What is service discovery used for in Prometheus?",
        "options": [
          "Discovering which targets to scrape dynamically",
          "Finding Grafana dashboards",
          "Identifying long-running queries",
          "Detecting alert storms"
        ],
        "correctIndex": 0,
        "difficulty": "easy",
        "explanation": "Service discovery dynamically tells Prometheus what targets currently exist (via Kubernetes API, EC2, Consul, etc.)."
      },
      {
        "id": "prom-m1-s6-i2",
        "q": "Which built-in service discovery mechanism does Prometheus use to discover Kubernetes pods, services, and endpoints?",
        "options": [
          "consul_sd_config",
          "kubernetes_sd_config",
          "ec2_sd_config",
          "static_configs"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "kubernetes_sd_config queries the Kubernetes API to discover pods, services, endpoints, ingresses, and nodes for scraping."
      },
      {
        "id": "prom-m1-s6-i3",
        "q": "Which Kubernetes object is selected by a ServiceMonitor to determine scrape targets?",
        "options": [
          "Deployments",
          "Pods directly",
          "Services (by label selector)",
          "Ingresses"
        ],
        "correctIndex": 2,
        "difficulty": "medium",
        "explanation": "ServiceMonitor uses a label selector against Kubernetes Services; Prometheus then scrapes the endpoints behind them."
      },
      {
        "id": "prom-m1-s6-i4",
        "q": "What relabeling stage allows you to drop, keep, or rewrite labels before metrics are stored?",
        "options": [
          "scrape_relabel_configs",
          "metric_relabel_configs",
          "alert_relabel_configs",
          "store_relabel_configs"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "metric_relabel_configs runs after the scrape and lets you keep/drop/rewrite labels (or drop entire series) before TSDB storage."
      }
    ],
    "s7": [
      {
        "id": "prom-m1-s7-i1",
        "q": "What is the default local retention period for Prometheus TSDB data?",
        "options": [
          "1 day",
          "15 days",
          "30 days",
          "90 days"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Prometheus retains TSDB data locally for 15 days by default, controllable via --storage.tsdb.retention.time."
      },
      {
        "id": "prom-m1-s7-i2",
        "q": "What does Prometheus use for long-term metric storage beyond local retention?",
        "options": [
          "S3 directly",
          "Remote write to systems like Cortex, Thanos, or Mimir",
          "Built-in long-term storage",
          "Pushgateway"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Long-term storage uses remote_write to systems like Thanos, Cortex, Mimir, or Grafana Cloud."
      },
      {
        "id": "prom-m1-s7-i3",
        "q": "How does Prometheus organise data on disk for efficient querying?",
        "options": [
          "Single flat file per metric",
          "Time-bucketed compressed blocks (typically 2-hour blocks compacted into larger ones)",
          "JSON files per timestamp",
          "SQL tables"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "TSDB data is stored as 2-hour blocks initially, then compacted into larger blocks (up to 31 days) for efficient long-range queries."
      }
    ]
  },
  "m2": {
    "s1": [
      {
        "id": "prom-m2-s1-i1",
        "q": "How is a single Prometheus time series uniquely identified?",
        "options": [
          "By metric name only",
          "By metric name + set of label key-value pairs",
          "By UUID",
          "By timestamp"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "A time series is uniquely identified by its metric name and the set of label key-value pairs."
      },
      {
        "id": "prom-m2-s1-i2",
        "q": "What two pieces of information accompany every value in a Prometheus time series?",
        "options": [
          "Hostname and port",
          "Timestamp (ms) and floating-point value",
          "Source IP and protocol",
          "Owner and team"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Each sample is a (timestamp_ms, float64_value) pair recorded against a unique series identity."
      },
      {
        "id": "prom-m2-s1-i3",
        "q": "Which is a valid Prometheus metric name pattern?",
        "options": [
          "http-requests-total",
          "http_requests_total",
          "HttpRequestsTotal",
          "http requests total"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Metric names use snake_case with underscores. Hyphens, spaces, and CamelCase are not conventional."
      },
      {
        "id": "prom-m2-s1-i4",
        "q": "Which suffix on a metric name conventionally indicates a counter?",
        "options": [
          "_count",
          "_total",
          "_sum",
          "_value"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Counter metrics conventionally end with _total (e.g. http_requests_total)."
      }
    ],
    "s2": [
      {
        "id": "prom-m2-s2-i1",
        "q": "What is the defining property of a Counter metric?",
        "options": [
          "It can go up and down",
          "It only goes up (or resets to zero on restart)",
          "It tracks distribution",
          "It is updated only on shutdown"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "A Counter is a monotonically increasing value that only goes up; it resets to zero when the process restarts."
      },
      {
        "id": "prom-m2-s2-i2",
        "q": "Why should you typically wrap a counter in rate() before plotting in Grafana?",
        "options": [
          "Counters cannot be plotted directly",
          "rate() converts the cumulative counter into per-second change, which is what you usually care about",
          "rate() makes the chart prettier",
          "Grafana requires rate()"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Raw counters are cumulative (always rising); rate() shows per-second activity, which is what humans usually want to see."
      },
      {
        "id": "prom-m2-s2-i3",
        "q": "What happens to a counter's value when the application restarts?",
        "options": [
          "Counter persists across restarts",
          "Counter resets to 0",
          "Counter freezes at last value",
          "Counter becomes negative"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Counters reset to 0 on application restart; PromQL's rate() automatically detects and handles these resets."
      }
    ],
    "s3": [
      {
        "id": "prom-m2-s3-i1",
        "q": "Which metric type can both increase and decrease?",
        "options": [
          "Counter",
          "Gauge",
          "Histogram",
          "Summary"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "A Gauge represents a value that can go up or down — like temperature, queue length, or memory usage."
      },
      {
        "id": "prom-m2-s3-i2",
        "q": "Which of the following is best modelled as a gauge?",
        "options": [
          "Total HTTP requests served",
          "Current memory in use",
          "Number of failed logins ever",
          "Total bytes read since boot"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Memory in use can go up and down, making it a perfect gauge. The others are monotonically rising counters."
      },
      {
        "id": "prom-m2-s3-i3",
        "q": "Should you apply rate() to a gauge?",
        "options": [
          "Yes, always",
          "No — rate() is only for counters",
          "Only if the value is positive",
          "Only over short ranges"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "rate() expects a monotonically increasing counter and detects resets. Applying it to a gauge produces nonsense."
      }
    ],
    "s4": [
      {
        "id": "prom-m2-s4-i1",
        "q": "What does a Prometheus histogram metric track?",
        "options": [
          "A single instantaneous value",
          "Distribution of observations into pre-configured buckets",
          "Per-second rate only",
          "A categorical label"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Histograms count observations into configurable cumulative buckets — useful for tracking request duration distributions."
      },
      {
        "id": "prom-m2-s4-i2",
        "q": "Which PromQL function is used to estimate quantiles from a histogram?",
        "options": [
          "quantile()",
          "histogram_quantile()",
          "percentile()",
          "estimate_quantile()"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "histogram_quantile() interpolates a quantile (e.g. p95) from the cumulative histogram buckets."
      },
      {
        "id": "prom-m2-s4-i3",
        "q": "When you instrument a histogram named http_request_duration_seconds, which derived series does the client library expose?",
        "options": [
          "Only _count",
          "_bucket{le=\"...\"}, _sum, and _count",
          "Only _sum",
          "A single series with all observations"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "Histograms expose three series: _bucket{le=...} (cumulative buckets), _sum (total of observed values), and _count (total observations)."
      },
      {
        "id": "prom-m2-s4-i4",
        "q": "Why is histogram_quantile typically wrapped around a rate() of buckets?",
        "options": [
          "To compute the quantile over a recent time window rather than over all-time totals",
          "To smooth visual noise",
          "rate() converts buckets to gauges",
          "It is required syntax"
        ],
        "correctIndex": 0,
        "difficulty": "hard",
        "explanation": "Buckets are cumulative counters. rate() converts them to per-second activity over the recent range, so the quantile reflects recent traffic."
      }
    ],
    "s5": [
      {
        "id": "prom-m2-s5-i1",
        "q": "What is the key difference between histogram and summary metrics?",
        "options": [
          "Summaries calculate quantiles client-side; histograms calculate them server-side via PromQL",
          "They are identical",
          "Summaries are faster on the server",
          "Histograms cannot be aggregated"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "Summaries pre-compute quantiles inside the application; histograms expose buckets and quantiles are calculated in PromQL."
      },
      {
        "id": "prom-m2-s5-i2",
        "q": "Which metric type is generally NOT aggregatable across multiple instances?",
        "options": [
          "Counter",
          "Gauge",
          "Summary quantiles",
          "Histogram buckets"
        ],
        "correctIndex": 2,
        "difficulty": "hard",
        "explanation": "Pre-computed summary quantiles cannot be meaningfully averaged across instances. Histogram buckets can be summed and re-quantiled."
      },
      {
        "id": "prom-m2-s5-i3",
        "q": "When should you prefer histogram over summary?",
        "options": [
          "Never — summaries are always better",
          "When you need to aggregate quantiles across instances or change quantile thresholds without re-deploying",
          "When you want lower client-side cost",
          "When metrics have very high cardinality"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "Histograms allow re-aggregating across instances and changing quantile cutoffs in PromQL without redeploying the app."
      }
    ],
    "s6": [
      {
        "id": "prom-m2-s6-i1",
        "q": "Why is high label cardinality dangerous in Prometheus?",
        "options": [
          "Each unique label combination creates a new time series, increasing memory and storage cost",
          "Labels make queries slower because Prometheus stores them as JSON",
          "Labels are encrypted",
          "Labels are case-sensitive"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "Every unique label-value combination creates a new series. Unbounded labels (user IDs, request IDs) explode cardinality and OOM Prometheus."
      },
      {
        "id": "prom-m2-s6-i2",
        "q": "Which label value would be a typical cardinality landmine?",
        "options": [
          "status=\"200\"",
          "method=\"GET\"",
          "user_id=\"42c81…\"",
          "region=\"us-east-1\""
        ],
        "correctIndex": 2,
        "difficulty": "easy",
        "explanation": "user_id has potentially unbounded values — every user creates a new series. Use bucketing/aggregation instead."
      },
      {
        "id": "prom-m2-s6-i3",
        "q": "What is the cardinality of a metric with 3 labels having 10, 20 and 5 distinct values?",
        "options": [
          "35",
          "100",
          "1000",
          "Up to 1000"
        ],
        "correctIndex": 3,
        "difficulty": "medium",
        "explanation": "Worst-case cardinality is the product: 10 × 20 × 5 = 1000 unique series. Actual cardinality may be lower depending on which combinations exist."
      }
    ],
    "s7": [
      {
        "id": "prom-m2-s7-i1",
        "q": "Which line format is correct in the Prometheus text exposition format?",
        "options": [
          "http_requests_total{status=\"200\"} 1027",
          "http_requests_total: 1027 [status=200]",
          "{http_requests_total, status=200} = 1027",
          "http_requests_total = 1027 (status=200)"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "The exposition format is: metric_name{label=\"value\",...} value [timestamp]."
      },
      {
        "id": "prom-m2-s7-i2",
        "q": "What do the # HELP and # TYPE lines do in the exposition format?",
        "options": [
          "They are required syntax errors",
          "They provide a description and type hint (counter, gauge, histogram, summary) for the metric",
          "They define ACL rules",
          "They are comments that Prometheus ignores entirely"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "# HELP describes the metric; # TYPE declares the metric type so the server knows how to handle it."
      },
      {
        "id": "prom-m2-s7-i3",
        "q": "What MIME type does Prometheus use for the modern OpenMetrics-compatible exposition format?",
        "options": [
          "text/html",
          "application/openmetrics-text",
          "application/json",
          "text/csv"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "OpenMetrics uses application/openmetrics-text and is the Prometheus-native format for modern scrapes (negotiated via Content-Type)."
      }
    ]
  },
  "m3": {
    "s1": [
      {
        "id": "prom-m3-s1-i1",
        "q": "Which PromQL data type represents a set of time series each with a single value at a single timestamp?",
        "options": [
          "Range vector",
          "Instant vector",
          "Scalar",
          "String"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Instant vectors return one value per series at the evaluation time. Range vectors include a window of values."
      },
      {
        "id": "prom-m3-s1-i2",
        "q": "Which expression returns a range vector?",
        "options": [
          "http_requests_total",
          "http_requests_total[5m]",
          "rate(http_requests_total)",
          "5"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Adding [duration] turns an instant vector selector into a range vector covering that lookback window."
      },
      {
        "id": "prom-m3-s1-i3",
        "q": "Which is a valid scalar in PromQL?",
        "options": [
          "http_requests_total",
          "vector(5)",
          "5",
          "rate(...)"
        ],
        "correctIndex": 2,
        "difficulty": "medium",
        "explanation": "A bare number like 5 is a scalar. vector(5) is an instant vector. http_requests_total is a vector. rate(...) returns a vector."
      }
    ],
    "s2": [
      {
        "id": "prom-m3-s2-i1",
        "q": "Which selector matches all http_requests_total series with status starting with 5?",
        "options": [
          "http_requests_total{status=\"5*\"}",
          "http_requests_total{status=~\"5..\"}",
          "http_requests_total{status==5xx}",
          "http_requests_total{status:5*}"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "=~ is the regex match operator. \"5..\" matches any 3-character status starting with 5."
      },
      {
        "id": "prom-m3-s2-i2",
        "q": "What does the !~ operator do in a label matcher?",
        "options": [
          "Negation by equality",
          "Negative regex match — selects series whose label does NOT match the regex",
          "Logical NOT",
          "Inverts the metric"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "!~ is the negative regex match — selects series where the label value does NOT match the given regex."
      },
      {
        "id": "prom-m3-s2-i3",
        "q": "Which selector returns all series where the job label is anything but 'node'?",
        "options": [
          "{job!=\"node\"}",
          "{job<>\"node\"}",
          "{!job=\"node\"}",
          "not {job=\"node\"}"
        ],
        "correctIndex": 0,
        "difficulty": "easy",
        "explanation": "The != operator selects series where the label does not exactly equal the given value."
      },
      {
        "id": "prom-m3-s2-i4",
        "q": "Why does {job=~\".+\"} match more series than {job=\"\"}?",
        "options": [
          "They are equivalent",
          "{job=~\".+\"} matches series where job has any non-empty value, while {job=\"\"} matches series where the label is empty/missing",
          "Regex is faster",
          "{job=\"\"} matches everything"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "An empty string matcher selects series where the label is absent or empty. .+ regex matches series where the label has a non-empty value."
      }
    ],
    "s3": [
      {
        "id": "prom-m3-s3-i1",
        "q": "What does rate(http_requests_total[5m]) return?",
        "options": [
          "The total over 5 minutes",
          "The per-second average rate of increase over the 5-minute window",
          "The maximum value in the last 5 minutes",
          "The current value"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "rate() returns the per-second average rate of increase calculated over the specified range."
      },
      {
        "id": "prom-m3-s3-i2",
        "q": "When should you prefer irate() over rate()?",
        "options": [
          "For dashboards where you want to see fast-changing, recent activity (graphs, not alerts)",
          "For alerting on sustained trends",
          "When the counter is decreasing",
          "Always — irate is faster"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "irate() uses only the two most recent points, making it more reactive but spiky. Use rate() for alerting and irate() for live dashboards of volatile metrics."
      },
      {
        "id": "prom-m3-s3-i3",
        "q": "What does increase(http_requests_total[1h]) compute?",
        "options": [
          "The per-second rate over 1 hour",
          "The total increase of the counter over the last hour (extrapolated)",
          "The maximum value in the last hour",
          "Always 1.0"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "increase() computes the total counter increase over the range, automatically handling resets. It is rate() × range."
      },
      {
        "id": "prom-m3-s3-i4",
        "q": "Why must the range in rate(metric[Xm]) be at least twice the scrape_interval?",
        "options": [
          "For network reliability",
          "To ensure at least two samples are present so a delta can be computed",
          "To improve compression",
          "It is a stylistic convention only"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "rate() needs at least two samples in the range to compute a delta. With a 15s scrape interval, the range should be ≥ 30s; ≥ 1m is the typical safe minimum."
      }
    ],
    "s4": [
      {
        "id": "prom-m3-s4-i1",
        "q": "Which aggregation operator computes the average across series?",
        "options": [
          "sum",
          "avg",
          "count",
          "max"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "avg returns the arithmetic mean across the matched series."
      },
      {
        "id": "prom-m3-s4-i2",
        "q": "What does 'sum by (instance) (rate(http_requests_total[5m]))' do?",
        "options": [
          "Sums all rates and discards the instance label",
          "Sums rates within each instance group, returning one series per instance",
          "Removes the rate function",
          "Sums only one instance"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "by (instance) groups results by the instance label, returning one aggregated series per unique instance."
      },
      {
        "id": "prom-m3-s4-i3",
        "q": "How does 'without (pod)' differ from 'by (instance, job)'?",
        "options": [
          "They are identical",
          "without removes the listed labels and keeps everything else; by keeps only the listed labels",
          "without is invalid PromQL",
          "by aggregates differently"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "by keeps only the listed labels in the result; without removes the listed labels and keeps everything else."
      },
      {
        "id": "prom-m3-s4-i4",
        "q": "Which aggregation gives you the highest value across series?",
        "options": [
          "topk(1, x)",
          "max(x)",
          "Both work, but they return different shapes",
          "sort_desc(x)"
        ],
        "correctIndex": 2,
        "difficulty": "hard",
        "explanation": "max returns one series with the highest value (no labels). topk(1, x) returns one series with its labels intact. Pick by what you need downstream."
      }
    ],
    "s5": [
      {
        "id": "prom-m3-s5-i1",
        "q": "What does 'http_requests_total > 100' return?",
        "options": [
          "A boolean true/false",
          "Series whose values are greater than 100, with their original values",
          "Always 1 or 0",
          "An error"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Comparison operators filter the vector. Series passing the comparison are returned with their original values; failing series are dropped."
      },
      {
        "id": "prom-m3-s5-i2",
        "q": "What does the 'bool' modifier do in 'rate(x[5m]) > bool 0.5'?",
        "options": [
          "Converts the result to 1/0 instead of filtering",
          "Inverts the comparison",
          "Casts to integer",
          "Forces evaluation in Boolean mode"
        ],
        "correctIndex": 0,
        "difficulty": "hard",
        "explanation": "The bool modifier returns 1 (true) or 0 (false) for every series instead of filtering. Useful for SLO calculations."
      },
      {
        "id": "prom-m3-s5-i3",
        "q": "When dividing two vectors like 'errors / total', how are series matched?",
        "options": [
          "Position-wise",
          "By matching all label sets, defaulting to one-to-one matching on identical labels",
          "Always cross-product",
          "Alphabetically"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Vector-to-vector ops match on matching label sets one-to-one by default. Use 'on'/'ignoring' and 'group_left'/'group_right' for explicit control."
      }
    ],
    "s6": [
      {
        "id": "prom-m3-s6-i1",
        "q": "What does avg_over_time(cpu_usage[5m]) return?",
        "options": [
          "A range vector",
          "An instant vector with the time-average per series over the last 5 minutes",
          "The current value",
          "A scalar"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "*_over_time aggregations collapse a range vector into an instant vector by aggregating values over the window."
      },
      {
        "id": "prom-m3-s6-i2",
        "q": "What does predict_linear(filesystem_free[1h], 4*3600) compute?",
        "options": [
          "The average free space over 4 hours",
          "A linear extrapolation of free space 4 hours into the future, based on the last hour",
          "The minimum over 4 hours",
          "Always zero"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "predict_linear fits a linear regression over the range and extrapolates by N seconds — useful for 'will my disk fill up?' alerts."
      },
      {
        "id": "prom-m3-s6-i3",
        "q": "Which function would you use to detect a counter reset?",
        "options": [
          "resets()",
          "delta()",
          "changes()",
          "rate()"
        ],
        "correctIndex": 0,
        "difficulty": "hard",
        "explanation": "resets() returns the number of counter resets within a range — a value > 0 means the counter dropped (process restart or rollover)."
      }
    ],
    "s7": [
      {
        "id": "prom-m3-s7-i1",
        "q": "What is the main purpose of a recording rule?",
        "options": [
          "To pre-compute and store frequently-needed expressions, speeding up dashboards and alerts",
          "To replace exporters",
          "To define alert routes",
          "To configure scrape intervals"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "Recording rules pre-compute expensive expressions on a schedule and store the result as a new metric, making dashboards and alerts faster."
      },
      {
        "id": "prom-m3-s7-i2",
        "q": "What is the conventional naming format for a recording rule?",
        "options": [
          "snake_case_only",
          "level:metric:operations (e.g. job:http_requests:rate5m)",
          "MetricName_Recording",
          "The same as the original metric"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "The convention is level:metric:operations to make the rule's aggregation level visible (e.g. job:http_requests:rate5m)."
      },
      {
        "id": "prom-m3-s7-i3",
        "q": "How often does Prometheus evaluate recording rules?",
        "options": [
          "Every scrape",
          "At the global evaluation_interval (default 1 minute, configurable per group)",
          "Continuously",
          "Only on demand"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Rule groups are evaluated at the global evaluation_interval (default 1 minute) or the group's interval override."
      }
    ],
    "s8": [
      {
        "id": "prom-m3-s8-i1",
        "q": "Which PromQL expression typically computes a 5-minute error rate?",
        "options": [
          "sum(rate(http_requests_total{status=~\"5..\"}[5m]))",
          "rate(errors_total)",
          "avg_over_time(errors[5m])",
          "errors_total / 5"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "sum(rate(...{status=~\"5..\"}[5m])) sums the per-second rate of 5xx errors over the last 5 minutes — a standard 'error rate' query."
      },
      {
        "id": "prom-m3-s8-i2",
        "q": "What does this compute? histogram_quantile(0.95, sum by (le) (rate(http_request_duration_seconds_bucket[5m])))",
        "options": [
          "95th percentile request count",
          "p95 request latency over the last 5 minutes",
          "Average latency",
          "Number of slow requests"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "Standard p95 latency pattern: rate the buckets, sum by le, then ask histogram_quantile for the 0.95 cutoff."
      },
      {
        "id": "prom-m3-s8-i3",
        "q": "What does 'up == 0' indicate?",
        "options": [
          "A target is healthy",
          "A target's last scrape failed",
          "An invalid query",
          "A counter has reset"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Prometheus exposes 'up' = 1 when a scrape succeeded, 0 when it failed — the simplest 'target down' check."
      }
    ]
  },
  "m4": {
    "s1": [
      {
        "id": "prom-m4-s1-i1",
        "q": "What is an exporter in the Prometheus ecosystem?",
        "options": [
          "A backup tool",
          "An adapter that exposes /metrics for systems that do not natively support Prometheus",
          "A long-term storage backend",
          "A query language"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Exporters are bridges that translate non-Prometheus metrics (MySQL stats, OS counters, etc.) into the Prometheus exposition format on /metrics."
      },
      {
        "id": "prom-m4-s1-i2",
        "q": "Why are exporters often deployed as sidecars or as separate processes from the system being monitored?",
        "options": [
          "For performance",
          "To isolate failure and to avoid modifying the third-party software being monitored",
          "Required by Kubernetes",
          "Convention only"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Exporters run separately so you don't have to modify (or even have source access to) the system you're monitoring."
      }
    ],
    "s2": [
      {
        "id": "prom-m4-s2-i1",
        "q": "What does node_exporter expose?",
        "options": [
          "Kubernetes object state",
          "Hardware and OS-level metrics (CPU, memory, disk, network)",
          "Application-level metrics",
          "Container CPU"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "node_exporter is the canonical exporter for *NIX system metrics: CPU, memory, disk, network, load, etc."
      },
      {
        "id": "prom-m4-s2-i2",
        "q": "Which metric exposed by node_exporter would you use to compute available memory percentage?",
        "options": [
          "node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes",
          "node_load1",
          "node_cpu_seconds_total",
          "node_filesystem_free_bytes"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "MemAvailable_bytes ÷ MemTotal_bytes gives the fraction of memory available — multiply by 100 for a percent."
      },
      {
        "id": "prom-m4-s2-i3",
        "q": "What does node_exporter NOT collect by default?",
        "options": [
          "CPU usage",
          "Per-process memory usage",
          "Disk I/O",
          "Network bytes"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "node_exporter focuses on host-level metrics. Per-process metrics need process_exporter or similar."
      }
    ],
    "s3": [
      {
        "id": "prom-m4-s3-i1",
        "q": "What does blackbox_exporter probe?",
        "options": [
          "Internal application memory",
          "External endpoints over HTTP, HTTPS, DNS, TCP, ICMP — measuring availability and latency",
          "Kubernetes objects",
          "Disk performance"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "blackbox_exporter probes endpoints externally to measure reachability, response time, certificate validity, etc."
      },
      {
        "id": "prom-m4-s3-i2",
        "q": "Which metric does blackbox_exporter expose to indicate whether a probe succeeded?",
        "options": [
          "probe_status",
          "probe_success (1=ok, 0=fail)",
          "probe_health",
          "blackbox_up"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "probe_success is 1 on a successful probe and 0 on failure — alert on this for SLA-style availability checks."
      }
    ],
    "s4": [
      {
        "id": "prom-m4-s4-i1",
        "q": "What does kube-state-metrics expose?",
        "options": [
          "Container CPU usage",
          "Information about Kubernetes objects (deployments, pods, jobs, etc.) and their state",
          "Node disk I/O",
          "Application traces"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "kube-state-metrics translates Kubernetes API state (replicas desired, pods ready, etc.) into Prometheus metrics."
      },
      {
        "id": "prom-m4-s4-i2",
        "q": "What does cAdvisor (built into the kubelet) expose?",
        "options": [
          "Cluster-level state",
          "Per-container resource usage (CPU, memory, network, fs)",
          "Audit logs",
          "Pod scheduling decisions"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "cAdvisor reports container-level resource consumption — this is how you see actual CPU/memory usage of pods and containers."
      },
      {
        "id": "prom-m4-s4-i3",
        "q": "Which metric would tell you 'is this Deployment fully rolled out?'",
        "options": [
          "kube_deployment_status_replicas_available == kube_deployment_spec_replicas",
          "kube_pod_status_phase",
          "container_cpu_usage_seconds_total",
          "up"
        ],
        "correctIndex": 0,
        "difficulty": "hard",
        "explanation": "Comparing kube_deployment_status_replicas_available to kube_deployment_spec_replicas tells you if the desired count is met."
      }
    ],
    "s5": [
      {
        "id": "prom-m4-s5-i1",
        "q": "Which is NOT an official Prometheus client library language?",
        "options": [
          "Go",
          "Java",
          "Python",
          "COBOL"
        ],
        "correctIndex": 3,
        "difficulty": "easy",
        "explanation": "Official client libraries exist for Go, Java/JVM, Python, Ruby, .NET, Rust, and others — but not COBOL."
      },
      {
        "id": "prom-m4-s5-i2",
        "q": "When instrumenting a counter for HTTP requests, which is the conventional metric name?",
        "options": [
          "http.requests",
          "HttpRequestsTotal",
          "http_requests_total",
          "requests"
        ],
        "correctIndex": 2,
        "difficulty": "medium",
        "explanation": "snake_case with _total suffix for counters: http_requests_total."
      },
      {
        "id": "prom-m4-s5-i3",
        "q": "When instrumenting code, you should AVOID putting which kind of value into a label?",
        "options": [
          "status code (200, 404, 500)",
          "method (GET, POST)",
          "high-cardinality values like user_id or trace_id",
          "tenant name (small fixed set)"
        ],
        "correctIndex": 2,
        "difficulty": "medium",
        "explanation": "Unbounded labels like user_id explode cardinality. Use bucketing/aggregation instead, or trace those in a tracing system."
      }
    ],
    "s6": [
      {
        "id": "prom-m4-s6-i1",
        "q": "When is Pushgateway the right tool?",
        "options": [
          "For long-running services",
          "For short-lived batch jobs that finish before Prometheus can scrape them",
          "As a replacement for Alertmanager",
          "For high-cardinality metrics"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Pushgateway buffers metrics from short-lived jobs (cron, batch) so Prometheus can scrape the gateway after the job has ended."
      },
      {
        "id": "prom-m4-s6-i2",
        "q": "Why should Pushgateway NOT be used as a generic push endpoint for long-running services?",
        "options": [
          "It is too slow",
          "Pushed metrics never expire and can accumulate stale data; Pushgateway becomes a single point of failure and obscures target health",
          "Prometheus refuses to scrape it",
          "It is closed source"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "Pushed metrics persist until explicitly deleted. For long-lived services, scraping is better — Prometheus naturally handles target up/down."
      }
    ]
  },
  "m5": {
    "s1": [
      {
        "id": "prom-m5-s1-i1",
        "q": "Which two components participate in Prometheus alerting?",
        "options": [
          "Prometheus and Grafana",
          "Prometheus (evaluates rules, fires alerts) and Alertmanager (routes and delivers them)",
          "Alertmanager and Pushgateway",
          "node_exporter and Prometheus"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Prometheus evaluates alerting rules and fires alerts; Alertmanager handles deduplication, grouping, routing, and notifications."
      },
      {
        "id": "prom-m5-s1-i2",
        "q": "What is the lifecycle of an alert from rule firing to user notification?",
        "options": [
          "Rule evaluates → Alert fires → Sent to Alertmanager → Grouped/deduplicated → Routed to receiver → Notification delivered",
          "Rule fires → Direct Slack call",
          "Alert evaluated only on demand",
          "Prometheus delivers notifications itself"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "Prometheus fires to Alertmanager, which groups, deduplicates, silences as configured, and finally routes to the right receiver."
      }
    ],
    "s2": [
      {
        "id": "prom-m5-s2-i1",
        "q": "What does the 'for: 5m' clause in an alert rule mean?",
        "options": [
          "Evaluate every 5 minutes",
          "The condition must be true for 5 continuous minutes before the alert fires (state goes from pending to firing)",
          "Alert fires for 5 minutes only",
          "Wait 5 minutes after the alert"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "'for' is the pending duration — the alert must remain firing for that long before transitioning to the firing state, reducing flap."
      },
      {
        "id": "prom-m5-s2-i2",
        "q": "What is the purpose of labels and annotations in an alert rule?",
        "options": [
          "They are interchangeable",
          "Labels are used by Alertmanager for routing/grouping; annotations carry human-readable text like description and runbook URL",
          "Annotations route the alert",
          "Labels are only for display"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Labels (severity, team, etc.) drive Alertmanager's routing/grouping. Annotations are human-readable extras (summary, description, runbook_url)."
      },
      {
        "id": "prom-m5-s2-i3",
        "q": "Which is a typical 'severity' label used in alert routing?",
        "options": [
          "1, 2, 3",
          "page, ticket, info",
          "high, low, urgent, normal",
          "Either A or B is common"
        ],
        "correctIndex": 3,
        "difficulty": "hard",
        "explanation": "Common conventions are page/ticket/info or critical/warning/info — Alertmanager routes use these labels."
      }
    ],
    "s3": [
      {
        "id": "prom-m5-s3-i1",
        "q": "What does Alertmanager's deduplication step do?",
        "options": [
          "Removes duplicate Prometheus instances",
          "Suppresses identical alerts received from multiple HA Prometheus servers",
          "Deletes the database",
          "Removes expired silences"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "When you run HA Prometheus, both servers fire the same alert. Alertmanager dedupes them so you get one notification."
      },
      {
        "id": "prom-m5-s3-i2",
        "q": "What is the purpose of grouping in Alertmanager?",
        "options": [
          "To slow down alerts",
          "To bundle related alerts into a single notification (e.g. 'all 5 nodes in rack A are down')",
          "To delete alerts",
          "To assign owners"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Grouping consolidates many related alerts (same group_by labels) into a single notification, reducing noise."
      }
    ],
    "s4": [
      {
        "id": "prom-m5-s4-i1",
        "q": "Which file format does Alertmanager use for configuration?",
        "options": [
          "JSON",
          "YAML (alertmanager.yml)",
          "TOML",
          "INI"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Alertmanager uses YAML, conventionally named alertmanager.yml, with route, receivers, and inhibition_rules sections."
      },
      {
        "id": "prom-m5-s4-i2",
        "q": "In Alertmanager, what does a 'receiver' represent?",
        "options": [
          "A team",
          "A notification target like Slack, PagerDuty, email, or webhook",
          "An alert",
          "A silence"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "A receiver is the destination for notifications — Slack channel, PagerDuty service, email list, generic webhook, etc."
      },
      {
        "id": "prom-m5-s4-i3",
        "q": "Which routing tree feature lets you match alerts to specific receivers based on labels?",
        "options": [
          "matcher",
          "match/match_re or matchers",
          "filter",
          "Both A and B"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "Routes use 'match'/'match_re' (legacy) or 'matchers' (modern) to select alerts based on label values."
      }
    ],
    "s5": [
      {
        "id": "prom-m5-s5-i1",
        "q": "What does a silence do in Alertmanager?",
        "options": [
          "Deletes the alert rule permanently",
          "Temporarily suppresses notifications for alerts matching specified labels",
          "Disables Prometheus",
          "Clears the history"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Silences mute notifications for matching alerts during a time window — useful for planned maintenance."
      },
      {
        "id": "prom-m5-s5-i2",
        "q": "What does an inhibition rule do?",
        "options": [
          "Prevents lower-severity alerts from notifying when a higher-severity alert is firing for the same scope",
          "Silences all alerts permanently",
          "Inhibits scraping",
          "Throttles notifications"
        ],
        "correctIndex": 0,
        "difficulty": "hard",
        "explanation": "Inhibition suppresses one alert when another is firing — e.g. don't page on individual pod failures when the entire cluster is down."
      }
    ],
    "s6": [
      {
        "id": "prom-m5-s6-i1",
        "q": "What is the PrometheusRule CRD used for?",
        "options": [
          "Defining alerting and recording rules declaratively in Kubernetes via the Prometheus Operator",
          "Configuring Grafana dashboards",
          "Routing alerts",
          "Defining service discovery"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "PrometheusRule is the operator's CRD for alerting + recording rules — it gets reconciled into Prometheus's rule files automatically."
      },
      {
        "id": "prom-m5-s6-i2",
        "q": "Which label on a PrometheusRule resource determines which Prometheus instance picks it up?",
        "options": [
          "The labels matched by the Prometheus's ruleSelector",
          "The namespace label",
          "The name",
          "The annotation 'app'"
        ],
        "correctIndex": 0,
        "difficulty": "hard",
        "explanation": "Each Prometheus resource specifies a ruleSelector that matches PrometheusRule label sets — only matching rule files are loaded."
      }
    ],
    "s7": [
      {
        "id": "prom-m5-s7-i1",
        "q": "Which is a best practice for alert rule design?",
        "options": [
          "Alert on every metric over a threshold",
          "Alert on symptoms users feel (high error rate, latency) rather than on every internal cause",
          "Always use very short 'for:' durations",
          "Send all alerts to one channel"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "The 'symptom-based' approach (Google SRE) means alerting on user-impacting issues, not every internal anomaly. Reduces fatigue."
      },
      {
        "id": "prom-m5-s7-i2",
        "q": "Why is including a runbook_url annotation valuable on alerts?",
        "options": [
          "Required by Alertmanager",
          "Lets the on-call engineer quickly find documented investigation steps for that specific alert",
          "Prevents the alert from firing",
          "Makes the alert ID shorter"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "runbook_url makes alerts actionable — the on-call jumps to documented steps instead of starting from scratch at 3am."
      }
    ]
  },
  "m6": {
    "s1": [
      {
        "id": "prom-m6-s1-i1",
        "q": "What is the default Prometheus HTTP API port that Grafana points to?",
        "options": [
          "3000",
          "9090",
          "9091",
          "8080"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Prometheus listens on 9090 by default. (3000 is Grafana's default. 9091 is Pushgateway.)"
      },
      {
        "id": "prom-m6-s1-i2",
        "q": "When you configure a Prometheus data source in Grafana, what does Grafana send to Prometheus?",
        "options": [
          "Raw metrics",
          "PromQL queries via HTTP, then renders the response",
          "Configuration files",
          "Alert silences"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Grafana sends PromQL queries to Prometheus's /api/v1/query and /api/v1/query_range endpoints and visualises the response."
      }
    ],
    "s2": [
      {
        "id": "prom-m6-s2-i1",
        "q": "What is a dashboard variable in Grafana typically populated with for Prometheus dashboards?",
        "options": [
          "A static list",
          "label_values() of a PromQL query, e.g. label_values(up, instance)",
          "User comments",
          "Database table rows"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "label_values() is the most common pattern: extract the distinct values of a label from a PromQL query for use as dropdown choices."
      },
      {
        "id": "prom-m6-s2-i2",
        "q": "How do you reference a dashboard variable named 'instance' inside a PromQL query?",
        "options": [
          "${instance}",
          "$instance",
          "{{instance}}",
          "Either A or B works (B is most common)"
        ],
        "correctIndex": 3,
        "difficulty": "medium",
        "explanation": "Grafana substitutes $instance or ${instance} for the variable's current value at query time."
      }
    ],
    "s3": [
      {
        "id": "prom-m6-s3-i1",
        "q": "Which panel type is best for showing a trend over time?",
        "options": [
          "Stat",
          "Time series (graph) panel",
          "Table",
          "Gauge"
        ],
        "correctIndex": 1,
        "difficulty": "easy",
        "explanation": "Time series panels render the X axis as time and are ideal for trend analysis — the workhorse of Prometheus dashboards."
      },
      {
        "id": "prom-m6-s3-i2",
        "q": "When would you use a Stat panel instead of a Time series panel?",
        "options": [
          "When showing a single current value (like CPU% right now or total errors today)",
          "Always",
          "For long history",
          "For tables of data"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "Stat panels are big-number summaries — perfect for KPIs and current snapshots; not for trend analysis."
      }
    ],
    "s4": [
      {
        "id": "prom-m6-s4-i1",
        "q": "A Grafana panel shows 'No data'. Which is the FIRST thing to check?",
        "options": [
          "Is the panel's PromQL valid in Prometheus's own query UI?",
          "Reinstall Grafana",
          "Restart the cluster",
          "Increase scrape_interval"
        ],
        "correctIndex": 0,
        "difficulty": "easy",
        "explanation": "Run the same PromQL directly in Prometheus's /graph UI. If it works there, the issue is in Grafana (variable/data source); if not, the metric or query is the issue."
      },
      {
        "id": "prom-m6-s4-i2",
        "q": "A query returning 'no data' — but you can see the metric in Prometheus's targets. Likely cause?",
        "options": [
          "Time range mismatch (query window before metric started, or 'now' is offset)",
          "Grafana is broken",
          "Prometheus is down",
          "DNS issue"
        ],
        "correctIndex": 0,
        "difficulty": "medium",
        "explanation": "Time range issues are the #1 cause: dashboard time range may predate the metric, or queries reference a time when the target wasn't reporting."
      },
      {
        "id": "prom-m6-s4-i3",
        "q": "Grafana shows 'too many points' errors. What is happening?",
        "options": [
          "Too many panels",
          "Query window × resolution exceeds Grafana's max data points; reduce range or increase step/interval",
          "Network failure",
          "Authentication error"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "Query result has too many points to render. Either narrow the time range, raise step, or aggregate (e.g. with $__rate_interval)."
      }
    ],
    "s5": [
      {
        "id": "prom-m6-s5-i1",
        "q": "What does Grafana provisioning let you do?",
        "options": [
          "Install Grafana",
          "Manage data sources, dashboards, and alert rules declaratively from files (GitOps-friendly)",
          "Replace Prometheus",
          "Run queries faster"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Provisioning loads YAML/JSON files at startup — your dashboards and data sources become version-controlled artefacts."
      },
      {
        "id": "prom-m6-s5-i2",
        "q": "Why is GitOps for Grafana dashboards recommended in production environments?",
        "options": [
          "Required by Grafana",
          "Versioning, code review, reproducibility, easy rollback — same benefits as for any infrastructure code",
          "Faster rendering",
          "Better visual quality"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "Dashboards-as-code gives you all the benefits of code: reviews, history, rollback, environment promotion."
      }
    ],
    "s6": [
      {
        "id": "prom-m6-s6-i1",
        "q": "User says 'the dashboard is wrong'. What is your first triage step as a support engineer?",
        "options": [
          "Reboot the server",
          "Identify whether the issue is in (a) the data Prometheus has scraped, (b) the PromQL, or (c) the Grafana visualisation — by running the query in Prometheus directly",
          "Recreate the dashboard",
          "Reset the user's password"
        ],
        "correctIndex": 1,
        "difficulty": "medium",
        "explanation": "Isolate the layer: check Prometheus targets/data, then PromQL in Prometheus's own UI, then Grafana visualisation. Each layer has different fixes."
      },
      {
        "id": "prom-m6-s6-i2",
        "q": "A user complains about a missing metric. Which is NOT a likely cause?",
        "options": [
          "The exporter or app is not exposing the metric",
          "Prometheus is not scraping the target (target down or misconfigured)",
          "Relabeling rules are dropping it",
          "Grafana installs metrics on its own"
        ],
        "correctIndex": 3,
        "difficulty": "easy",
        "explanation": "Grafana doesn't generate metrics — it only queries them. The other three are the typical 'missing metric' causes."
      },
      {
        "id": "prom-m6-s6-i3",
        "q": "Prometheus alerts are firing but no notifications arrive. Where do you look?",
        "options": [
          "Only at Prometheus",
          "Check Alertmanager: is it reachable, are routes/receivers correct, are silences active, are inhibitions matching?",
          "Reinstall Grafana",
          "Increase scrape interval"
        ],
        "correctIndex": 1,
        "difficulty": "hard",
        "explanation": "Once Prometheus has fired the alert, the rest of the chain is Alertmanager: receivers, routes, silences, inhibitions, and connectivity to the notification target."
      }
    ]
  }
};
