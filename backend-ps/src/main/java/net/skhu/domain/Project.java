package net.skhu.domain;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString(exclude = { "projectJoins", "weeklies","projectStars", "posts", "files", "contests" })
@EqualsAndHashCode(exclude = { "projectJoins", "weeklies","projectStars", "posts", "files", "contests" })
@Entity
public class Project {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int projectId;

	String projectName;
	int memNum;
	String theme;
	String content;
	LocalDateTime startDate;
	boolean progState;
	boolean rcrtState;
	String tag;
	boolean contest;
	String github;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "capId")
	User user;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "subjectId")
	Subject subject;

	@JsonIgnore
	@OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
	List<ProjectJoin> projectJoins;

	@JsonIgnore
	@OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
	List<Weekly> weeklies;
	
	@JsonIgnore
	@OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
	List<ProjectStar> projectStars;
	
	@JsonIgnore
	@OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
	List<Post> posts;
	
	@JsonIgnore
	@OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
	List<File> files;
	
	@JsonIgnore
	@OneToMany(mappedBy = "project", fetch = FetchType.LAZY)
	List<Contest> contests;

	public Project() {
	}

	public Project(String projectName, String theme, String content, String tag, String github, boolean rcrtState) {
		this.projectName = projectName;
		this.memNum = 1;
		this.theme = theme;
		this.content = content;
		this.tag = tag;
		this.github = github;
		this.rcrtState = rcrtState;
		this.startDate = LocalDateTime.now();
		this.memNum = 1;
	}
}
