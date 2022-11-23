package com.dongnebook.domain.member.dto.response;

import com.dongnebook.domain.model.Location;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.querydsl.core.annotations.QueryProjection;

import lombok.Getter;

@Getter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MemberResponse {

	private Long id;
	private String name;
	private Location location;


	@QueryProjection
	public MemberResponse(Long id, String name, Location location) {
		this.id = id;
		this.name = name;
		this.location = location;
	}
}
