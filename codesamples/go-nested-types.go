package main

import "time"

type VulnerabilityDescription struct {
	DiscoverySummary struct {
		Discovery []struct {
			CreateTime time.Time `json:"createTime"`
			Discovered struct {
				AnalysisStatus     string `json:"analysisStatus"`
				ContinuousAnalysis string `json:"continuousAnalysis"`
			} `json:"discovered"`
			Kind        string    `json:"kind"`
			Name        string    `json:"name"`
			NoteName    string    `json:"noteName"`
			ResourceURL string    `json:"resourceUrl"`
			UpdateTime  time.Time `json:"updateTime"`
		} `json:"discovery"`
	} `json:"discovery_summary"`
	ImageSummary struct {
		Digest               string `json:"digest"`
		FullyQualifiedDigest string `json:"fully_qualified_digest"`
		Registry             string `json:"registry"`
		Repository           string `json:"repository"`
	} `json:"image_summary"`
	PackageVulnerabilitySummary struct {
		NotFixedVulnerabilityCount int `json:"not_fixed_vulnerability_count"`
		TotalVulnerabilityFound    int `json:"total_vulnerability_found"`
		Vulnerabilities            struct {
			CRITICAL []Occurences `json:"CRITICAL"`
			HIGH     []Occurences `json:"HIGH"`
			LOW      []Occurences `json:"LOW"`
			MEDIUM   []Occurences `json:"MEDIUM"`
			None     []Occurences `json:"None"`
		} `json:"vulnerabilities"`
	} `json:"package_vulnerability_summary"`
}

type VulnerabilityDetails struct {
	CvssScore    float64 `json:"cvssScore"`
	PackageIssue []struct {
		AffectedLocation struct {
			CpeURI  string `json:"cpeUri"`
			Package string `json:"package"`
			Version struct {
				Name     string `json:"name"`
				Revision string `json:"revision"`
			} `json:"version"`
		} `json:"affectedLocation"`
		FixedLocation struct {
			CpeURI  string `json:"cpeUri"`
			Package string `json:"package"`
			Version struct {
				Kind string `json:"kind"`
			} `json:"version"`
		} `json:"fixedLocation"`
		SeverityName string `json:"severityName"`
	} `json:"packageIssue"`
	Severity string `json:"severity"`
}

type Occurences struct {
	CreateTime           time.Time            `json:"createTime"`
	Kind                 string               `json:"kind"`
	Name                 string               `json:"name"`
	NoteName             string               `json:"noteName"`
	ResourceURL          string               `json:"resourceUrl"`
	UpdateTime           time.Time            `json:"updateTime"`
	VulnerabilityDetails VulnerabilityDetails `json:"vulnerability"`
}
