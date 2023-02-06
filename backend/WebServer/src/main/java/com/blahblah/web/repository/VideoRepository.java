package com.blahblah.web.repository;

import com.blahblah.web.entity.VideoEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface VideoRepository extends JpaRepository<VideoEntity, Long> {

    @Query(value="select * from videos v where v.user_id=(select us.subscribe_user_id from user_subscribes us where us.user_id = :id) or v.user_id =:id", nativeQuery = true)
    Page<VideoEntity> findAllBy(@Param("id") long id, Pageable pageable);

    Page<VideoEntity> findAllByUserId(long userId, Pageable pageable);

    void deleteById(long id);

    @Modifying
    @Query(value="update videos v set v.views=v.views+1 where v.id=?", nativeQuery = true)
    int updateViewsById(@Param("id") long id);
}
